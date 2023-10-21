import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateOrJoin from "@/components/forms/CreateTeamSpacesForm";
import JoinTeamSpacesForm from "../forms/JoinTeamSpacesForm";
import { Modal } from "../Modal";
import { useTeamSpaceModal } from "@/hooks/use-teamspace-modal";

export const NoTeamSpaces = () => {
  const teamSpacesModal = useTeamSpaceModal()
  return (
    <div className="flex justify-center items-center w-2/4">
      <Modal isOpen={teamSpacesModal.isOpen} onClose={teamSpacesModal.onClose}>
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="create" className="w-1/2">
              Create
            </TabsTrigger>
            <TabsTrigger value="join" className="w-1/2">
              Join
            </TabsTrigger>
          </TabsList>
          <TabsContent value="create" className="!ring-0 space-y-4 p-4">
            <CreateOrJoin />
          </TabsContent>
          <TabsContent value="join" className="!ring-0 space-y-4 p-4">
            <JoinTeamSpacesForm />
          </TabsContent>
        </Tabs>
      </Modal>
    </div>
  );
};
