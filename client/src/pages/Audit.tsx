import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAuditRequestSchema, type InsertAuditRequest } from "@shared/schema";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const whatYouGet = [
  "UX & funnel review",
  "Speed & performance check",
  "App audit",
  "CRO opportunities",
  "Prioritised action list"
];

const whoItsFor = [
  "New or recently launched DTC brands",
  "Founders struggling with conversion",
  "Stores with traffic but low sales"
];

const trafficOptions = [
  "Under 1,000 visitors/month",
  "1,000 - 10,000 visitors/month",
  "10,000 - 50,000 visitors/month",
  "50,000+ visitors/month"
];

const revenueOptions = [
  "Pre-revenue / Just launched",
  "Under $10k/month",
  "$10k - $50k/month",
  "$50k - $100k/month",
  "$100k+/month"
];

const formSchema = insertAuditRequestSchema.extend({
  storeUrl: z.string().url("Please enter a valid URL"),
  email: z.string().email("Please enter a valid email"),
  monthlyTraffic: z.string().min(1, "Please select a traffic range"),
  monthlyRevenue: z.string().min(1, "Please select a revenue range"),
  mainChallenge: z.string().min(10, "Please describe your main challenge"),
});

export default function Audit() {
  const { toast } = useToast();
  
  useDocumentTitle(
    "Get a Shopify Conversion Audit | TwoClicks",
    "Request a detailed Shopify conversion audit. We'll review your store and tell you exactly what's hurting conversion and what to fix first."
  );
  
  const form = useForm<InsertAuditRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeUrl: "",
      monthlyTraffic: "",
      monthlyRevenue: "",
      mainChallenge: "",
      email: "",
      whatsapp: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertAuditRequest) => {
      return await apiRequest("POST", "/api/audit-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Request submitted",
        description: "We'll review your store and get back to you within 24-48 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertAuditRequest) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-audit-headline">
            Get a Shopify Conversion Audit
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-audit-subhead">
            We'll review your store and tell you exactly what's hurting conversion — and what to fix first.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionHeader title="What You Get" />
            <ul className="space-y-4 mb-12">
              {whatYouGet.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span data-testid={`text-what-you-get-${index}`}>{item}</span>
                </li>
              ))}
            </ul>

            <SectionHeader title="Who It's For" />
            <ul className="space-y-4">
              {whoItsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span data-testid={`text-who-its-for-${index}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Request your audit</CardTitle>
                <CardDescription>
                  Fill out this form and we'll get back to you within 24-48 hours.
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
                              data-testid="input-store-url"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="monthlyTraffic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Traffic *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-monthly-traffic">
                                <SelectValue placeholder="Select traffic range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {trafficOptions.map((option) => (
                                <SelectItem key={option} value={option} data-testid={`option-traffic-${option}`}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="monthlyRevenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Revenue *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-monthly-revenue">
                                <SelectValue placeholder="Select revenue range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {revenueOptions.map((option) => (
                                <SelectItem key={option} value={option} data-testid={`option-revenue-${option}`}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mainChallenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Main Challenge *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What's the biggest issue you're facing with your store?"
                              className="min-h-[100px]"
                              data-testid="textarea-main-challenge"
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
                              data-testid="input-email"
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
                              data-testid="input-whatsapp"
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
                      data-testid="button-submit-audit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Audit
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <p className="mt-6 text-sm text-muted-foreground text-center" data-testid="text-audit-followup">
              If your store is a good fit, we'll recommend next steps — often a retainer.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
