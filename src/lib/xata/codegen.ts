// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client"
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client"

const tables = [
  { name: "career", columns: [{ name: "name", type: "string", unique: true }] },
  { name: "course", columns: [{ name: "name", type: "string" }] },
  { name: "teacher", columns: [{ name: "name", type: "string" }] },
  { name: "period", columns: [{ name: "utec_id", type: "int", unique: true }] },
  {
    name: "class",
    columns: [
      { name: "course", type: "link", link: { table: "course" } },
      { name: "period", type: "link", link: { table: "period" } },
      { name: "wrong_formula", type: "bool", defaultValue: "false" },
    ],
  },
  {
    name: "curriculum",
    columns: [
      { name: "career", type: "link", link: { table: "career" } },
      { name: "utec_id", type: "int", unique: true },
    ],
  },
  {
    name: "rel_career_period",
    columns: [
      { name: "career", type: "link", link: { table: "career" } },
      { name: "period", type: "link", link: { table: "period" } },
      { name: "enrolled_students", type: "int" },
    ],
  },
  {
    name: "section",
    columns: [
      { name: "teacher", type: "link", link: { table: "teacher" } },
      { name: "class", type: "link", link: { table: "class" } },
      { name: "score", type: "float" },
      { name: "section", type: "int" },
    ],
  },
  {
    name: "level",
    columns: [
      { name: "curriculum", type: "link", link: { table: "curriculum" } },
      { name: "elective_count", type: "int" },
      { name: "order", type: "int" },
    ],
  },
  {
    name: "utec_account",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "curriculum", type: "link", link: { table: "curriculum" } },
      { name: "first_period", type: "link", link: { table: "period" } },
      { name: "last_period", type: "link", link: { table: "period" } },
      { name: "score", type: "float" },
      { name: "merit_order", type: "int" },
      { name: "ranking", type: "int" },
    ],
  },
  {
    name: "evaluation",
    columns: [
      { name: "handle", type: "string" },
      { name: "label", type: "string" },
      { name: "class", type: "link", link: { table: "class" } },
      {
        name: "can_be_deleted",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
      { name: "weight", type: "float" },
    ],
  },
  {
    name: "rel_level_course",
    columns: [
      { name: "level", type: "link", link: { table: "level" } },
      { name: "course", type: "link", link: { table: "course" } },
      { name: "credits", type: "float" },
    ],
  },
  {
    name: "period_enrollment",
    columns: [
      { name: "period", type: "link", link: { table: "period" } },
      { name: "utec_account", type: "link", link: { table: "utec_account" } },
      { name: "curriculum", type: "link", link: { table: "curriculum" } },
      { name: "score", type: "float" },
      { name: "merit_order", type: "int" },
    ],
  },
  {
    name: "section_enrollment",
    columns: [
      {
        name: "period_enrollment",
        type: "link",
        link: { table: "period_enrollment" },
      },
      { name: "section", type: "link", link: { table: "section" } },
      { name: "score", type: "float" },
      {
        name: "dropped_out",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
      { name: "elective", type: "bool", notNull: true, defaultValue: "false" },
      { name: "elective_order", type: "int" },
    ],
  },
  {
    name: "grade",
    columns: [
      {
        name: "section_enrollment",
        type: "link",
        link: { table: "section_enrollment" },
      },
      { name: "evaluation", type: "link", link: { table: "evaluation" } },
      { name: "score", type: "float" },
    ],
  },
  {
    name: "profile",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "handle", type: "string", unique: true },
      { name: "name", type: "string" },
      { name: "bio", type: "string" },
      { name: "profile_picture", type: "string" },
      { name: "cover_picture", type: "string" },
      { name: "ig_handle", type: "string" },
      { name: "tw_handle", type: "string" },
      { name: "gh_handle", type: "string" },
      { name: "embedding", type: "vector", vector: { dimension: 1536 } },
    ],
  },
  {
    name: "metadata",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "feeding", type: "bool", notNull: true, defaultValue: "false" },
      { name: "last_fed_at", type: "datetime" },
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
    name: "profile_stats",
    columns: [
      {
        name: "profile",
        type: "link",
        link: { table: "profile" },
        unique: true,
      },
      { name: "follower_count", type: "int", notNull: true, defaultValue: "0" },
      {
        name: "following_count",
        type: "int",
        notNull: true,
        defaultValue: "0",
      },
      { name: "like_count", type: "int", notNull: true, defaultValue: "0" },
    ],
  },
  {
    name: "rel_profiles",
    columns: [
      { name: "profile_a", type: "link", link: { table: "profile" } },
      { name: "profile_b", type: "link", link: { table: "profile" } },
      {
        name: "a_follows_b",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
    ],
  },
  {
    name: "post",
    columns: [
      {
        name: "body",
        type: "string",
        notNull: true,
        defaultValue: "Default text",
      },
      { name: "embedding", type: "vector", vector: { dimension: 1536 } },
      { name: "author_profile", type: "link", link: { table: "profile" } },
      { name: "like_count", type: "int", notNull: true, defaultValue: "0" },
    ],
  },
] as const

export type SchemaTables = typeof tables
export type InferredTypes = SchemaInference<SchemaTables>

export type Career = InferredTypes["career"]
export type CareerRecord = Career & XataRecord

export type Course = InferredTypes["course"]
export type CourseRecord = Course & XataRecord

export type Teacher = InferredTypes["teacher"]
export type TeacherRecord = Teacher & XataRecord

export type Period = InferredTypes["period"]
export type PeriodRecord = Period & XataRecord

export type Class = InferredTypes["class"]
export type ClassRecord = Class & XataRecord

export type Curriculum = InferredTypes["curriculum"]
export type CurriculumRecord = Curriculum & XataRecord

export type RelCareerPeriod = InferredTypes["rel_career_period"]
export type RelCareerPeriodRecord = RelCareerPeriod & XataRecord

export type Section = InferredTypes["section"]
export type SectionRecord = Section & XataRecord

export type Level = InferredTypes["level"]
export type LevelRecord = Level & XataRecord

export type UtecAccount = InferredTypes["utec_account"]
export type UtecAccountRecord = UtecAccount & XataRecord

export type Evaluation = InferredTypes["evaluation"]
export type EvaluationRecord = Evaluation & XataRecord

export type RelLevelCourse = InferredTypes["rel_level_course"]
export type RelLevelCourseRecord = RelLevelCourse & XataRecord

export type PeriodEnrollment = InferredTypes["period_enrollment"]
export type PeriodEnrollmentRecord = PeriodEnrollment & XataRecord

export type SectionEnrollment = InferredTypes["section_enrollment"]
export type SectionEnrollmentRecord = SectionEnrollment & XataRecord

export type Grade = InferredTypes["grade"]
export type GradeRecord = Grade & XataRecord

export type Profile = InferredTypes["profile"]
export type ProfileRecord = Profile & XataRecord

export type Metadata = InferredTypes["metadata"]
export type MetadataRecord = Metadata & XataRecord

export type NextauthUsers = InferredTypes["nextauth_users"]
export type NextauthUsersRecord = NextauthUsers & XataRecord

export type NextauthAccounts = InferredTypes["nextauth_accounts"]
export type NextauthAccountsRecord = NextauthAccounts & XataRecord

export type NextauthVerificationTokens =
  InferredTypes["nextauth_verificationTokens"]
export type NextauthVerificationTokensRecord = NextauthVerificationTokens &
  XataRecord

export type NextauthUsersAccounts = InferredTypes["nextauth_users_accounts"]
export type NextauthUsersAccountsRecord = NextauthUsersAccounts & XataRecord

export type NextauthUsersSessions = InferredTypes["nextauth_users_sessions"]
export type NextauthUsersSessionsRecord = NextauthUsersSessions & XataRecord

export type NextauthSessions = InferredTypes["nextauth_sessions"]
export type NextauthSessionsRecord = NextauthSessions & XataRecord

export type ProfileStats = InferredTypes["profile_stats"]
export type ProfileStatsRecord = ProfileStats & XataRecord

export type RelProfiles = InferredTypes["rel_profiles"]
export type RelProfilesRecord = RelProfiles & XataRecord

export type Post = InferredTypes["post"]
export type PostRecord = Post & XataRecord

export type DatabaseSchema = {
  career: CareerRecord
  course: CourseRecord
  teacher: TeacherRecord
  period: PeriodRecord
  class: ClassRecord
  curriculum: CurriculumRecord
  rel_career_period: RelCareerPeriodRecord
  section: SectionRecord
  level: LevelRecord
  utec_account: UtecAccountRecord
  evaluation: EvaluationRecord
  rel_level_course: RelLevelCourseRecord
  period_enrollment: PeriodEnrollmentRecord
  section_enrollment: SectionEnrollmentRecord
  grade: GradeRecord
  profile: ProfileRecord
  metadata: MetadataRecord
  nextauth_users: NextauthUsersRecord
  nextauth_accounts: NextauthAccountsRecord
  nextauth_verificationTokens: NextauthVerificationTokensRecord
  nextauth_users_accounts: NextauthUsersAccountsRecord
  nextauth_users_sessions: NextauthUsersSessionsRecord
  nextauth_sessions: NextauthSessionsRecord
  profile_stats: ProfileStatsRecord
  rel_profiles: RelProfilesRecord
  post: PostRecord
}

const DatabaseClient = buildClient()

const defaultOptions = {
  databaseURL: "https://coollege-jbc8sn.us-east-1.xata.sh/db/utec",
}

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables)
  }
}

let instance: XataClient | undefined = undefined

export const getXataClient = () => {
  if (instance) return instance

  instance = new XataClient()
  return instance
}
