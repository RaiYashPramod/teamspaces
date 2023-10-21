import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { teamSpaceSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import useAuthStore from "@/providers/auth-provider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useTeamSpaceModal } from "@/hooks/use-teamspace-modal";

type FormType = z.infer<typeof teamSpaceSchema>;

const CreateTeamSpacesForm = () => {
  const navigate = useNavigate();
  const { userToken } = useAuthStore();
  const teamSpacesModal = useTeamSpaceModal();
  
  const form = useForm<FormType>({
    resolver: zodResolver(teamSpaceSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormType) => {
    if(!userToken) navigate('/login');
    axios.defaults.headers.common["Authorization"] = userToken;
    console.log(data, userToken);

    const response = await axios.post('http://localhost:3030/api/teamspace/create', data)
    form.reset();
    teamSpacesModal.onClose();
    // console.log(response);
    if (response.status === 200) {
      toast(`Space for ${data.name} created succesfully!`)
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="leading-none text-lg font-semibold tracking-tight">
          Create a team space
        </h1>
        <p className="text-muted-foreground">
          Start and create a new space for your team
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a Team Space Name" {...field} />
                </FormControl>
                <FormDescription>
                  You can also change this name later at any point.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateTeamSpacesForm;
