// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "student",
    columns: [{ name: "email", type: "string", unique: true }],
  },
  {
    name: "course",
    columns: [
      {
        name: "name",
        type: "string",
        notNull: true,
        defaultValue: "Frontend Engineering Fundamentals",
      },
      { name: "handle", type: "string", unique: true },
    ],
  },
  {
    name: "teacher",
    columns: [
      {
        name: "first_name",
        type: "string",
        notNull: true,
        defaultValue: "Bad",
      },
      {
        name: "last_name",
        type: "string",
        notNull: true,
        defaultValue: "Bunny",
      },
    ],
  },
  {
    name: "enrollment",
    columns: [
      { name: "student", type: "link", link: { table: "student" } },
      { name: "classroom", type: "link", link: { table: "classroom" } },
      { name: "final_score", type: "float" },
    ],
  },
  {
    name: "classroom",
    columns: [
      { name: "teacher", type: "link", link: { table: "teacher" } },
      { name: "score", type: "float", notNull: true, defaultValue: "17.89" },
      { name: "section", type: "int", notNull: true, defaultValue: "1" },
      { name: "class", type: "link", link: { table: "class" } },
    ],
  },
  {
    name: "score",
    columns: [
      { name: "enrollment", type: "link", link: { table: "enrollment" } },
      { name: "evaluation", type: "link", link: { table: "evaluation" } },
      {
        name: "raw_grades",
        type: "string",
        notNull: true,
        defaultValue: '"20,19.85"',
      },
    ],
  },
  {
    name: "evaluation",
    columns: [
      { name: "handle", type: "string", notNull: true, defaultValue: "PC1" },
      {
        name: "name",
        type: "string",
        notNull: true,
        defaultValue: "Práctica Calificada 1",
      },
      { name: "class", type: "link", link: { table: "class" } },
      {
        name: "delete_lowest",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
      { name: "weight", type: "float", notNull: true, defaultValue: "0" },
    ],
  },
  {
    name: "class",
    columns: [
      { name: "course", type: "link", link: { table: "course" } },
      { name: "period", type: "link", link: { table: "period" } },
    ],
  },
  {
    name: "nextauth_users",
    columns: [
      { name: "email", type: "email" },
      { name: "emailVerified", type: "datetime" },
      {
        name: "links",
        type: "object",
        columns: [
          { name: "content", type: "string" },
          { name: "payments", type: "string" },
        ],
      },
      { name: "name", type: "string" },
      { name: "image", type: "string" },
    ],
  },
  {
    name: "nextauth_accounts",
    columns: [
      { name: "user", type: "link", link: { table: "nextauth_users" } },
      { name: "type", type: "string" },
      { name: "provider", type: "string" },
      { name: "providerAccountId", type: "string" },
      { name: "refresh_token", type: "string" },
      { name: "access_token", type: "string" },
      { name: "expires_at", type: "int" },
      { name: "token_type", type: "string" },
      { name: "scope", type: "string" },
      { name: "id_token", type: "text" },
      { name: "session_state", type: "string" },
      { name: "oauth_token", type: "string" },
      { name: "oauth_token_secret", type: "string" },
    ],
  },
  {
    name: "nextauth_verificationTokens",
    columns: [
      { name: "identifier", type: "string" },
      { name: "token", type: "string" },
      { name: "expires", type: "datetime" },
    ],
  },
  {
    name: "nextauth_users_accounts",
    columns: [
      { name: "user", type: "link", link: { table: "nextauth_users" } },
      { name: "account", type: "link", link: { table: "nextauth_accounts" } },
    ],
  },
  {
    name: "nextauth_users_sessions",
    columns: [
      { name: "user", type: "link", link: { table: "nextauth_users" } },
      { name: "session", type: "link", link: { table: "nextauth_sessions" } },
    ],
  },
  {
    name: "nextauth_sessions",
    columns: [
      { name: "sessionToken", type: "string" },
      { name: "expires", type: "datetime" },
      { name: "user", type: "link", link: { table: "nextauth_users" } },
    ],
  },
  {
    name: "period",
    columns: [{ name: "handle", type: "string", unique: true }],
  },
  {
    name: "curriculum",
    columns: [{ name: "handle", type: "string", unique: true }],
  },
  {
    name: "student_curriculum",
    columns: [
      { name: "student", type: "link", link: { table: "student" } },
      { name: "curriculum", type: "link", link: { table: "curriculum" } },
    ],
  },
  {
    name: "level",
    columns: [
      { name: "number", type: "int", notNull: true, defaultValue: "0" },
      { name: "curriculum", type: "link", link: { table: "curriculum" } },
      { name: "elective_count", type: "int" },
    ],
  },
  {
    name: "level_course",
    columns: [
      { name: "level", type: "link", link: { table: "level" } },
      { name: "course", type: "link", link: { table: "course" } },
      { name: "credits", type: "float", notNull: true, defaultValue: "0" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Student = InferredTypes["student"];
export type StudentRecord = Student & XataRecord;

export type Course = InferredTypes["course"];
export type CourseRecord = Course & XataRecord;

export type Teacher = InferredTypes["teacher"];
export type TeacherRecord = Teacher & XataRecord;

export type Enrollment = InferredTypes["enrollment"];
export type EnrollmentRecord = Enrollment & XataRecord;

export type Classroom = InferredTypes["classroom"];
export type ClassroomRecord = Classroom & XataRecord;

export type Score = InferredTypes["score"];
export type ScoreRecord = Score & XataRecord;

export type Evaluation = InferredTypes["evaluation"];
export type EvaluationRecord = Evaluation & XataRecord;

export type Class = InferredTypes["class"];
export type ClassRecord = Class & XataRecord;

export type NextauthUsers = InferredTypes["nextauth_users"];
export type NextauthUsersRecord = NextauthUsers & XataRecord;

export type NextauthAccounts = InferredTypes["nextauth_accounts"];
export type NextauthAccountsRecord = NextauthAccounts & XataRecord;

export type NextauthVerificationTokens =
  InferredTypes["nextauth_verificationTokens"];
export type NextauthVerificationTokensRecord = NextauthVerificationTokens &
  XataRecord;

export type NextauthUsersAccounts = InferredTypes["nextauth_users_accounts"];
export type NextauthUsersAccountsRecord = NextauthUsersAccounts & XataRecord;

export type NextauthUsersSessions = InferredTypes["nextauth_users_sessions"];
export type NextauthUsersSessionsRecord = NextauthUsersSessions & XataRecord;

export type NextauthSessions = InferredTypes["nextauth_sessions"];
export type NextauthSessionsRecord = NextauthSessions & XataRecord;

export type Period = InferredTypes["period"];
export type PeriodRecord = Period & XataRecord;

export type Curriculum = InferredTypes["curriculum"];
export type CurriculumRecord = Curriculum & XataRecord;

export type StudentCurriculum = InferredTypes["student_curriculum"];
export type StudentCurriculumRecord = StudentCurriculum & XataRecord;

export type Level = InferredTypes["level"];
export type LevelRecord = Level & XataRecord;

export type LevelCourse = InferredTypes["level_course"];
export type LevelCourseRecord = LevelCourse & XataRecord;

export type DatabaseSchema = {
  student: StudentRecord;
  course: CourseRecord;
  teacher: TeacherRecord;
  enrollment: EnrollmentRecord;
  classroom: ClassroomRecord;
  score: ScoreRecord;
  evaluation: EvaluationRecord;
  class: ClassRecord;
  nextauth_users: NextauthUsersRecord;
  nextauth_accounts: NextauthAccountsRecord;
  nextauth_verificationTokens: NextauthVerificationTokensRecord;
  nextauth_users_accounts: NextauthUsersAccountsRecord;
  nextauth_users_sessions: NextauthUsersSessionsRecord;
  nextauth_sessions: NextauthSessionsRecord;
  period: PeriodRecord;
  curriculum: CurriculumRecord;
  student_curriculum: StudentCurriculumRecord;
  level: LevelRecord;
  level_course: LevelCourseRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://beauty-grades-vgntv3.us-east-1.xata.sh/db/utec",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
