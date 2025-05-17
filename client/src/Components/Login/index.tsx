"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Cross } from "lucide-react";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
})
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { modalState } from "@/modals"
import { loginUser } from "@/api/login";
import { setCookies } from "@/helper";
import { useUserState } from "@/store/useUserStore";
import { toast } from "sonner";


const LoginForm = ({ setIsModalOpen }: modalState) => {


  const { setLoggedIn } = useUserState();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: ""
        },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {
        let res = await loginUser({name: values.username, email: values.email})
        setCookies({key : "token", value : res.token})
        localStorage.setItem('userData',JSON.stringify({name: values.username, email: values.email}))
        setIsModalOpen(false)
        setLoggedIn(true)
        toast(`${values.username} Logged in Succesfully`)
    }

    return (<>
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#000007f2] absolute top-0 z-9">
            <Form {...form}>
                <div>
                    <Cross className="text-white cursor-pointer rotate-45 mb-4 ml-[95%]" onClick={() => setIsModalOpen(false)} />
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[400px] border-1 p-[40px] rounded-sm">
                        <h1 className="text-[1.5rem] mb-4">Create an account</h1>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormDescription className="text-[12px]">
                                        This is your public display name.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" id="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className="text-[#FE7743] cursor-pointer w-[100%];" type="submit">Submit</Button>
                    </form>
                </div>
            </Form>
        </div>
    </>)
}

export default LoginForm