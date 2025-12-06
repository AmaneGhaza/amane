import type { Dictionary } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function HelpSearchSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
          {dict.helpSearch.title}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{dict.helpSearch.placeholder}</p>

        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="lg:col-span-2">
                    <Input
                        type="text"
                        placeholder={dict.helpSearch.filters.keyword}
                        className="h-12 text-base"
                    />
                </div>
                 <Select>
                    <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder={dict.helpSearch.filters.city} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="gaza-city">Gaza City</SelectItem>
                        <SelectItem value="rafah">Rafah</SelectItem>
                        <SelectItem value="khan-yunis">Khan Yunis</SelectItem>
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder={dict.helpSearch.filters.helpType} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="medical">{dict.howItHelps.categories.medical}</SelectItem>
                        <SelectItem value="food">{dict.howItHelps.categories.food}</SelectItem>
                        <SelectItem value="shelter">{dict.howItHelps.categories.shelter}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="mt-6">
                <Button size="lg" className="w-full md:w-auto">
                    <Search className="h-5 w-5 me-2" />
                    {dict.helpSearch.buttons.search}
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
