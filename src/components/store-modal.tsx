'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Modal } from '@/components/ui/standard-modal';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import useStoreModal from '@/hooks/use-store-modal';
import useBaseUrl from '@/hooks/use-base-url';
import Button from '@/components/ui/button';
import { toast } from 'react-hot-toast';

const formSchema = z.object({
  url: z.string().url('Invalid api url'),
});

export default function StoreModal() {
  const storeModal = useStoreModal();
  const setBaseUrl = useBaseUrl((state) => state.setBaseUrl);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setBaseUrl(values.url);
    window.location.assign(`${values.url.split('/').pop()}/home`);
  };

  const onCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('Api URL copied to clipboard.');
  };

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Api URL</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button type="submit">Continue</Button>
                </div>
              </form>
            </Form>
            <div
              className="underline cursor-pointer"
              onClick={() => onCopy(process.env.NEXT_PUBLIC_TEST_API_URL!)}
            >
              Click here to copy test api url
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
