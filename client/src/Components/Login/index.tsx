"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import { Cross } from "lucide-react";

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
import { loginUser } from "@/api/login";
import { setCookies } from "@/helper";
import { useUserState } from "@/store/useUserStore";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRef } from "react"


const LoginForm = () => {
    const { setLoggedIn } = useUserState();
    const dialogRef = useRef<any>(null)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: ""
        },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {
        let res = await loginUser({ name: values.username, email: values.email })
        setCookies({ key: "token", value: res.token })
        localStorage.setItem('userData', JSON.stringify({ name: values.username, email: values.email }))
        // setIsModalOpen(false)
        if(dialogRef?.current) {
            dialogRef.current.click()
        }
        setLoggedIn(true)
        toast(`${values.username} Logged in Succesfully`)
    }

    return (<>

        <Dialog>
            <DialogTrigger asChild>
                <Button ref={dialogRef} variant="outline">Login</Button>
            </DialogTrigger>
            <Form {...form}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Account</DialogTitle>
                    <DialogDescription>
                        Creat a new account or login into existing.
                    </DialogDescription>
                </DialogHeader>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <DialogFooter>
                    <Button className="text-[#FE7743] cursor-pointer w-[100px] mt-[1.5rem]" type="submit">Login</Button>
                </DialogFooter>
                    </form>
            </DialogContent>
            </Form>
        </Dialog>
    </>)
}

export default LoginForm