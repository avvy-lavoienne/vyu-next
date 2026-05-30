"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto URL
    const recipient = "vyuapp@proton.me";
    const subject = encodeURIComponent(formState.subject);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show success message and reset form
    setFormStatus("success");
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus("idle");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-accent-light/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-md bg-accent-light px-3 py-1 text-sm text-accent font-medium">
              Contact Us
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-text-primary">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-lg text-text-secondary">
              Have a project in mind? We'd love to hear from you. Reach out to us and let's craft your vision together.
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-accent-light p-3 text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Our Location</h3>
                <p className="text-text-secondary">
                  Jl. Ratu Indah Dewata,
                  Perum Griya Mutiara Rancabango Blok C.40 Desa. Rancabango
                  Kecamatan Tarogong Kaler Kabupaten Garut Jawa Barat, Indonesia
                  44151
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-accent-light p-3 text-accent">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Email Us</h3>
                <p className="text-text-secondary">vyuapp@proton.me</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-accent-light p-3 text-accent">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Call Us</h3>
                <p className="text-text-secondary">+62 (819) 3298-9898</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6 shadow-elevation-1">
              <h3 className="text-lg font-bold text-text-primary mb-4">Office Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary">
                <div className="font-medium">Monday - Friday</div>
                <div>9:00 AM - 4:00 PM</div>
                <div className="font-medium">Saturday</div>
                <div>10:00 AM - 2:00 PM</div>
                <div className="font-medium">Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg border border-border bg-surface p-8 shadow-elevation-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus === "success" && (
                <Alert className="bg-success/10 text-success border-success/20">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Ready to Send!</AlertTitle>
                  <AlertDescription>
                    Your email client has been opened. Please review and send the email.
                  </AlertDescription>
                </Alert>
              )}

              <div className="grid gap-2">
                <Label htmlFor="name" className="text-text-primary font-medium">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  className="h-11 bg-background border border-border rounded-md px-4 text-text-primary placeholder-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-text-primary font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  className="h-11 bg-background border border-border rounded-md px-4 text-text-primary placeholder-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject" className="text-text-primary font-medium">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  value={formState.subject}
                  onChange={handleChange}
                  className="h-11 bg-background border border-border rounded-md px-4 text-text-primary placeholder-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-text-primary font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-background border border-border rounded-md px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary-hover text-white font-semibold rounded-md transition-all shadow-elevation-1">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
