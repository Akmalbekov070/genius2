'use client';

import { z } from 'zod';

export const formSchema = z.object({
	username: z.string().min(3).max(50),
	phone: z.string(),
	kursnomi: z.string(),
});
