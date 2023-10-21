import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { joinTeamSpaceSchema } from "@/lib/schema";
import useAuthStore from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useTeamSpaceModal } from "@/hooks/use-teamspace-modal";

type FormType = z.infer<typeof joinTeamSpaceSchema>;

const JoinTeamSpacesForm = () => {
  const {userToken} = useAuthStore();
  const teamSpaceModal = useTeamSpaceModal();
  const navigate = useNavigate();
  const form = useForm<FormType>({
    resolver: zodResolver(joinTeamSpaceSchema),
    defaultValues: {
      code: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormType) => {
    if(!userToken) navigate('/login');
    axios.defaults.headers.common["Authorization"] = userToken;
    console.log(data, userToken);

    const response = await axios.post('http://localhost:3030/api/teamspace/join', data)
    
    form.reset();
    teamSpaceModal.onClose();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="leading-none text-lg font-semibold tracking-tight">
          Join a team space
        </h1>
        <p className="text-muted-foreground">
          Join a existing Team Space.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the code" {...field} />
                </FormControl>
                <FormDescription>
                  You can get the invitation code from the team space admin.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </Form>

      {/* <div>
    <label htmlFor="" className="block pb-2 pt-2 text-sm font-semibold">Code</label>
    <Input />
    </div> */}
    </>
  );
};

export default JoinTeamSpacesForm;
