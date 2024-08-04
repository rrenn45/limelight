'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form,FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    brief_description: z.string().min(2).max(50, {message: "Brief Description must not be longer than 50 characters"}),
    long_description: z.string().min(2).max(100),
})

export default function WorkOrderForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            brief_description:"",
            long_description: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }

    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-4">
          <FormField
            control={form.control}
            name="brief_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief Description</FormLabel>
                <FormControl>
                  <Input placeholder="brief description" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a brief description of the work order.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="long_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Long Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="long description" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a longer, detailed description of the work order.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>)
}