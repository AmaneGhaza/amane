'use client';
import React, { useState } from 'react';
import type { Dictionary } from '@/lib/types';
import { Heart, Package, MapPin, Phone, CheckCircle, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function DonorPledgeForm({ dict }: { dict: Dictionary }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: 'medical',
    items: '',
    quantity: '',
    location: '',
    phone: '',
    email: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = () => {
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  const ITEM_CATEGORIES = [
    { value: "medical", label: dict.howItHelps.categories.medical },
    { value: "food", label: dict.howItHelps.categories.food },
    { value: "shelter", label: dict.howItHelps.categories.shelter },
    { value: "education", label: dict.howItHelps.categories.education },
    { value: "elderly", label: dict.howItHelps.categories.elderly },
    { value: "financial", label: dict.howItHelps.categories.financial },
  ];

  if (submitted) {
    return (
      <div className="min-h-[80vh] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">{dict.requestHelpPage.form.success_title} 🙏</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Your pledge has been recorded. We'll contact you when someone in Gaza needs your items.
          </p>
          <div className="bg-green-50 rounded-2xl p-6 mb-6 border-2 border-green-200">
            <h3 className="font-bold text-lg mb-3 text-accent">What Happens Next?</h3>
            <div className="text-left space-y-3 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-accent font-bold">1.</span>
                Your items are now listed anonymously on our platform
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent font-bold">2.</span>
                When someone needs your items, we'll contact you via {formData.phone}
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent font-bold">3.</span>
                We coordinate secure delivery through verified partners
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent font-bold">4.</span>
                You receive confirmation when items are delivered
              </p>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({
                category: 'medical',
                items: '',
                quantity: '',
                location: '',
                phone: '',
                email: '',
                notes: '',
              });
            }}
          >
            Pledge More Items
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">Become an Anonymous Donor</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 font-headline">
            {dict.donatePage.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            Your identity stays private. Your impact stays powerful.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-card rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-muted-foreground">{dict.requestHelpPage.step} {step}/3</span>
            <span className="text-sm font-semibold text-primary">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-3xl shadow-2xl p-6 md:p-8 border">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  What Can You Provide?
                </h2>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">{dict.requestHelpPage.form.helpCategory.label} *</label>
                <Select name="category" value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={dict.requestHelpPage.form.helpCategory.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {ITEM_CATEGORIES.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Specific Item(s) *</label>
                <Input
                  type="text"
                  name="items"
                  value={formData.items}
                  onChange={handleChange}
                  placeholder="e.g., Insulin, Rice, Blankets"
                />
                <p className="text-sm text-muted-foreground mt-2">List the exact items you can provide</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Quantity/Amount *</label>
                <Input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 50 vials, 100 kg, 20 boxes"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Delivery Information
                </h2>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Which area can you deliver to? *</label>
                <Select name="location" value={formData.location} onValueChange={(value) => handleSelectChange('location', value)}>
                   <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="">Select location</SelectItem>
                      <SelectItem value="Gaza City">Gaza City</SelectItem>
                      <SelectItem value="Rafah">Rafah</SelectItem>
                      <SelectItem value="Khan Yunis">Khan Yunis</SelectItem>
                      <SelectItem value="Deir al-Balah">Deir al-Balah</SelectItem>
                      <SelectItem value="Jabalia">Jabalia</SelectItem>
                      <SelectItem value="Any Location">Any Location (I'll arrange delivery)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Additional Notes (Optional)</label>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special conditions, expiry dates, or delivery preferences..."
                />
              </div>

              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <p className="text-sm text-primary">
                  <strong>Note:</strong> We work with verified delivery partners to ensure safe and dignified distribution.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  Contact Information
                </h2>
              </div>

              <div className="bg-accent/10 rounded-xl p-4 border border-accent/20 mb-6">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">100% Anonymous</p>
                    <p className="text-sm text-accent/80">
                      Your contact info is only used to coordinate delivery. Gaza residents never see your identity.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">{dict.requestHelpPage.form.contactPreference.label} *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
                <p className="text-sm text-muted-foreground mt-2">We'll only contact you when someone needs your items</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email (Optional)</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border-2 border-muted">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Your Pledge Summary
                </h3>
                <div className="space-y-2 text-sm text-foreground">
                  <p><strong>Items:</strong> {formData.items || 'Not specified'}</p>
                  <p><strong>Quantity:</strong> {formData.quantity || 'Not specified'}</p>
                  <p><strong>Category:</strong> {ITEM_CATEGORIES.find(c => c.value === formData.category)?.label}</p>
                  <p><strong>Delivery Area:</strong> {formData.location || 'Not specified'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t">
            {step > 1 && (
              <Button
                variant="secondary"
                onClick={() => setStep(step - 1)}
                className="flex-1"
              >
                {dict.buttons.back}
              </Button>
            )}
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="flex-1"
              >
                {dict.buttons.next}
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handleSubmit}
                className="flex-1 bg-accent hover:bg-accent/90"
              >
                {dict.buttons.submit} Pledge
              </Button>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 bg-card rounded-2xl px-6 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground">Anonymous</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-xs text-muted-foreground">Active Donors</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-xs text-muted-foreground">Items Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
