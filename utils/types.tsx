import * as z from 'zod';

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = 'Pendente',
  Interview = 'Entrevista',
  Declined = 'Recusado',
}

export enum JobMode {
  FullTime = 'Integral',
  PartTime = 'Meio período',
  Internship = 'Estágio',
}

export const createAndEditJobSchema = z.object({
    position: z.string().min(2, {
      message: 'O nome do cargo deve ter pelo menos 2 caracteres.',
    }),
    company: z.string().min(2, {
      message: 'O nome da empresa deve ter pelo menos 2 caracteres..',
    }),
    location: z.string().min(2, {
      message: 'A localização da vaga deve ter pelo menos 2 caracteres',
    }),
    status: z.nativeEnum(JobStatus),
    mode: z.nativeEnum(JobMode),
  });
  
  export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;


  //TODO ERRO NÂO ESTA SENDO RETORNADO.