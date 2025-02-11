"use client"
import React, {FC, useActionState} from 'react'
import {signInSchema} from "@/lib/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {authenticate} from "@/components/signInForm/action";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input"
import {useSearchParams} from "next/navigation";
import {Button} from "@/components/ui/button";

const SignInForm:FC = () => {
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "example@example.com",
            password: "example"
        }
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/admin/dashboard';
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );



    return (
        <Form {...form}>
            <form action={formAction} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@example.com" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example" type={"password"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <input type={"hidden"} name={"redirectTo"} value={callbackUrl}/>
                <Button type="submit" disabled={isPending}>Submit</Button>
                <div>
                    {errorMessage && (
                        <>
                            <p className="text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </form>
        </Form>

    )
}
export default SignInForm
