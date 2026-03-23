import { z } from 'zod';

// Exemplo de schema para tipar a estrutura de blocos da página
export const BlockSchema = z.object({
  id: z.string().optional(),
  type: z.string(),
  content: z.record(z.any()).optional(),
});

export type Block = z.infer<typeof BlockSchema>;
