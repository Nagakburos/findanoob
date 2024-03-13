  import { Button } from './ui/button';
  import { useMutation, useQueryClient } from '@tanstack/react-query';
  import { deleteJobAction } from '@/utils/actions';
  import { useToast } from '@/components/ui/use-toast';
  
  function DeleteJobButton({ id }: { id: string }) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: (id: string) => deleteJobAction(id),
      onSuccess: (data) => {
        if (!data) {
          toast({
            description: 'there was an error',
          });
          return;
        }
        queryClient.invalidateQueries({ queryKey: ['jobs'] });
        queryClient.invalidateQueries({ queryKey: ['stats'] });
        queryClient.invalidateQueries({ queryKey: ['charts'] });
  
        toast({ description: 'Vaga Removida' });
      },
    });
    return (
      <Button
        size='sm'
        disabled={isPending}
        onClick={() => {
          mutate(id);
        }}
      >
        {isPending ? 'Excluindo...' : 'Excluido!'}
      </Button>
    );
  }
  export default DeleteJobButton;