import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = insertContactSchema.extend({
  storeUrl: z.string().url("Please enter a valid URL"),
  email: z.string().email("Please enter a valid email"),
  challenge: z.string().min(10, "Please describe what you're stuck on"),
});

export default function Contact() {
  const { toast } = useToast();
  
  useDocumentTitle(
    "Contact Us - Tell Us About Your Store | TwoClicks",
    "Get in touch with TwoClicks. Tell us about your Shopify store and we'll let you know if we're a good fit."
  );
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeUrl: "",
      challenge: "",
      email: "",
      whatsapp: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "We'll get back to you within 24-48 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via email.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-contact-headline">
            Tell us about your store
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-subhead">
            If it's a good fit, we'll tell you honestly.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>
                Tell us about your store and what you're looking for.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="storeUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Store URL *</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://yourstore.com"
                            data-testid="input-contact-store-url"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What are you stuck on? *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your main challenges..."
                            className="min-h-[120px]"
                            data-testid="textarea-contact-challenge"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            data-testid="input-contact-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp (optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            data-testid="input-contact-whatsapp"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={mutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <p className="mt-6 text-sm text-muted-foreground text-center" data-testid="text-contact-response-time">
            We reply within 24–48 hours.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
