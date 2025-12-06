
'use client';
import React, { useState, useEffect } from 'react';
import type { Dictionary, Locale } from '@/lib/types';
import { Search, MapPin, Package, Stethoscope, Utensils, Home, GraduationCap, Baby, Clock, CheckCircle, AlertCircle, Filter, Heart, TrendingUp } from 'lucide-react';

const AVAILABLE_ITEMS = [
  { id: 1, item: "Insulin", category: "medical", location: "Gaza City", quantity: "50 vials", available: true, urgency: "high", lastUpdated: "5 min ago" },
  { id: 2, item: "Baby Formula", category: "baby", location: "Rafah", quantity: "100 cans", available: true, urgency: "high", lastUpdated: "10 min ago" },
  { id: 3, item: "Rice", category: "food", location: "Khan Yunis", quantity: "200 kg", available: true, urgency: "medium", lastUpdated: "15 min ago" },
  { id: 4, item: "Blankets", category: "shelter", location: "Gaza City", quantity: "150 units", available: true, urgency: "high", lastUpdated: "20 min ago" },
  { id: 5, item: "First Aid Kits", category: "medical", location: "Deir al-Balah", quantity: "75 kits", available: true, urgency: "high", lastUpdated: "25 min ago" },
  { id: 6, item: "School Supplies", category: "education", location: "Gaza City", quantity: "200 sets", available: true, urgency: "low", lastUpdated: "30 min ago" },
  { id: 7, item: "Diapers", category: "baby", location: "Rafah", quantity: "500 packs", available: true, urgency: "medium", lastUpdated: "35 min ago" },
  { id: 8, item: "Canned Food", category: "food", location: "Khan Yunis", quantity: "300 cans", available: true, urgency: "medium", lastUpdated: "40 min ago" },
  { id: 9, item: "Blood Pressure Medication", category: "medical", location: "Gaza City", quantity: "40 boxes", available: true, urgency: "high", lastUpdated: "45 min ago" },
  { id: 10, item: "Tents", category: "shelter", location: "Rafah", quantity: "25 tents", available: false, urgency: "high", lastUpdated: "2 hours ago" },
  { id: 11, item: "Baby Clothes", category: "baby", location: "Gaza City", quantity: "100 items", available: true, urgency: "low", lastUpdated: "1 hour ago" },
  { id: 12, item: "Flour", category: "food", location: "Khan Yunis", quantity: "150 kg", available: true, urgency: "medium", lastUpdated: "50 min ago" },
  { id: 13, item: "Antibiotics", category: "medical", location: "Deir al-Balah", quantity: "60 boxes", available: true, urgency: "high", lastUpdated: "55 min ago" },
  { id: 14, item: "Mattresses", category: "shelter", location: "Gaza City", quantity: "40 units", available: true, urgency: "medium", lastUpdated: "1 hour ago" },
  { id: 15, item: "Books", category: "education", location: "Rafah", quantity: "500 books", available: true, urgency: "low", lastUpdated: "2 hours ago" },
];

const CATEGORIES = [
  { id: "all", label: "All Items", icon: Package, color: "blue" },
  { id: "medical", label: "Medical", icon: Stethoscope, color: "red" },
  { id: "food", label: "Food & Water", icon: Utensils, color: "green" },
  { id: "baby", label: "Baby Care", icon: Baby, color: "pink" },
  { id: "shelter", label: "Shelter", icon: Home, color: "purple" },
  { id: "education", label: "Education", icon: GraduationCap, color: "yellow" },
];

const LOCATIONS = ["All Locations", "Gaza City", "Rafah", "Khan Yunis", "Deir al-Balah", "Jabalia"];

const URGENT_SEARCHES = [
  "Insulin", "Baby Formula", "First Aid", "Blankets", "Rice", "Medications"
];


export default function FindHelpClientPage({ dict, lang }: { dict: Dictionary, lang: Locale }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredItems, setFilteredItems] = useState(AVAILABLE_ITEMS);
  const [urgentOnly, setUrgentOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(true);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    filterItems();
  }, [searchQuery, selectedCategory, selectedLocation, urgentOnly, availableOnly]);

  const filterItems = () => {
    let filtered = AVAILABLE_ITEMS;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(item => item.location === selectedLocation);
    }

    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.item.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (urgentOnly) {
      filtered = filtered.filter(item => item.urgency === "high");
    }

    if (availableOnly) {
      filtered = filtered.filter(item => item.available);
    }

    setFilteredItems(filtered);
  };

  const handleRequestItem = (item: any) => {
    setSelectedItem(item);
    setShowRequestForm(true);
  };

  const getCategoryColor = (category: string) => {
    const cat = CATEGORIES.find(c => c.id === category);
    return cat?.color || "gray";
  };

  if (showRequestForm && selectedItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          <button
            onClick={() => setShowRequestForm(false)}
            className="text-slate-600 hover:text-slate-800 mb-6"
          >
            ← Back to Search
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Request: {selectedItem.item}</h2>
            <p className="text-slate-600">Fill out this form to request this item</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                placeholder="+972..."
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Exact Location *</label>
              <input
                type="text"
                placeholder="Street address, neighborhood"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">How much do you need?</label>
              <input
                type="text"
                placeholder="e.g., 2 vials, 5 cans"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Why do you need this? *</label>
              <textarea
                rows={4}
                placeholder="Brief explanation of your situation"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none resize-none"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Privacy Notice:</strong> Your information will only be shared with the anonymous donor who pledged this item. We will coordinate the delivery through our verified partners.
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-[1.02] shadow-lg">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 fill-current animate-pulse" />
            <span className="text-sm font-semibold">Live Available Items</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Search for What You Need
          </h1>
          <p className="text-slate-600 text-lg">
            Anonymous donors have pledged these items. Request what you need now.
          </p>
        </div>

        {/* Search Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-6 border border-slate-200">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="h-6 w-6" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you need? (e.g., insulin, rice, blankets...)"
              className="w-full pl-14 pr-4 py-5 text-lg rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            />
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap gap-3 mb-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all transform hover:scale-105 ${
                    isActive 
                      ? `bg-${cat.color}-500 text-white shadow-lg` 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Advanced Filters */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium mb-4"
          >
            <Filter className="h-4 w-4" />
            More Filters
          </button>

          {showFilters && (
            <div className="bg-slate-50 rounded-xl p-6 mb-6 space-y-4 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-2" />
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none bg-white"
                  >
                    {LOCATIONS.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={urgentOnly}
                      onChange={(e) => setUrgentOnly(e.target.checked)}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-sm font-medium">
                      <AlertCircle className="inline h-4 w-4 mr-2 text-red-500" />
                      Urgent Needs Only
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={availableOnly}
                      onChange={(e) => setAvailableOnly(e.target.checked)}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-sm font-medium">
                      <CheckCircle className="inline h-4 w-4 mr-2 text-green-500" />
                      Available Now Only
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Urgent Searches */}
          {!searchQuery && (
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="flex items-center gap-2 mb-3 text-red-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-semibold">Most Searched Right Now</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {URGENT_SEARCHES.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:bg-red-100 border border-red-200 transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between px-2">
          <h2 className="text-xl font-bold text-slate-800">
            {filteredItems.length} Items Available
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-blue-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl text-slate-800 mb-1">{item.item}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </div>
                </div>
                {item.urgency === "high" && (
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                    URGENT
                  </div>
                )}
              </div>

              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 bg-${getCategoryColor(item.category)}-100 text-${getCategoryColor(item.category)}-700`}>
                {CATEGORIES.find(c => c.id === item.category)?.label}
              </div>

              <div className="mb-4">
                <p className="text-slate-600 font-medium">
                  Quantity: <span className="text-slate-800">{item.quantity}</span>
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  {item.lastUpdated}
                </div>
                {item.available ? (
                  <span className="flex items-center gap-2 text-green-600 font-medium text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available
                  </span>
                ) : (
                  <span className="text-slate-400 text-sm">Taken</span>
                )}
              </div>

              <button
                onClick={() => handleRequestItem(item)}
                disabled={!item.available}
                className={`w-full py-3 rounded-xl font-semibold transition-all transform hover:scale-[1.02] ${
                  item.available
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-md'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {item.available ? 'Request This Item' : 'Not Available'}
              </button>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No items found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search or check back later</p>
          </div>
        )}
      </div>
    </div>
  );
}
