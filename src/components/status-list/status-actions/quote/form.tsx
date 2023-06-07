"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { QuoteStatusAction } from "./actions/quote-status"

const QuoteStatusForm = ({
  children,
  status_id,
}: {
  children: React.ReactNode
  status_id: string
}) => {
  const router = useRouter()
  const { toast } = useToast()

  return (
    <form
      action={async (base_data: FormData) => {
        let data = base_data

        data.append("original_status", status_id)
        const id = await QuoteStatusAction(data)

        const pretty_ob = { id, body: data.get("body"), quoted_from: status_id }

        toast({
          title: "Quote status created!",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(pretty_ob, null, 2)}
              </code>
            </pre>
          ),
        })

        router.push(`/status/${id}`)
      }}
    >
      <div className="flex flex-col gap-2">
        <Textarea
          placeholder="¿En qué estás pensando?"
          name="body"
          className="col-span-3"
        />
      </div>

      <div className="mt-4 flex justify-end">
        <Button type="submit">Publicar</Button>
      </div>
    </form>
  )
}

export { QuoteStatusForm }