'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import FormTextarea from '@/components/FormTextarea';
import { mockCategories, mockSubcategories } from '@/lib/mockData';
import Link from 'next/link';

type ListingType = 'For Sale' | 'Wanted' | 'For Rent' | 'Service Available' | 'Service Needed';
type Category = typeof mockCategories[number];

export default function PostListingPage() {
  const [formData, setFormData] = useState({
    // General
    listingType: '' as ListingType,
    category: '' as Category,
    subcategory: '',
    title: '',
    description: '',
    location: '',
    city: '',
    postalCode: '',
    contactName: '',
    phone: '',
    email: '',
    priceType: 'fixed' as 'fixed' | 'negotiable' | 'contact',
    price: '',
    makeOffer: false,

    // Material fields
    materialType: '',
    condition: '',
    quantity: '',
    unit: '',
    dimensions: '',
    pickupOnly: false,
    deliveryAvailable: false,
    palletized: false,

    // Dirt/Aggregate fields
    dirtType: '',
    estimatedVolume: '',
    haulDistanceNote: '',
    loadingAvailable: false,
    dumpTruckAccess: false,
    contaminationNote: '',
    readyNow: false,

    // Concrete fields
    mixType: '',
    volumeRemaining: '',
    deliveryWindow: '',
    pumpRequired: false,
    shortLoad: false,

    // Equipment fields
    equipmentType: '',
    makeModel: '',
    year: '',
    pricing: 'daily' as 'hourly' | 'daily' | 'weekly' | 'monthly',
    withOperator: false,
    equipmentDeliveryAvailable: false,

    // Hauling fields
    serviceType: '',
    truckType: '',
    loadCapacity: '',
    operatorIncluded: false,
    serviceRadius: '',
    availableDates: '',
    haulType: '',
    sameDay: false,

    // Labor fields
    trade: '',
    crewSize: '',
    certifications: '',
    minimumBooking: '',
    insured: false,
    travelRadius: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const listingTypes: ListingType[] = [
    'For Sale',
    'Wanted',
    'For Rent',
    'Service Available',
    'Service Needed',
  ];

  const subcategoryOptions = formData.category
    ? (mockSubcategories[formData.category] || []).map((s) => ({
        value: s,
        label: s,
      }))
    : [];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const showMaterialFields =
    formData.category === 'Materials' && formData.listingType !== 'Wanted';
  const showDirtFields = formData.category === 'Dirt & Aggregate';
  const showConcreteFields = formData.category === 'Concrete';
  const showEquipmentFields =
    formData.category === 'Equipment' &&
    (formData.listingType === 'For Sale' ||
      formData.listingType === 'For Rent');
  const showHaulingFields =
    formData.category === 'Hauling' &&
    formData.listingType === 'Service Available';
  const showLaborFields =
    formData.category === 'Labor & Crews' &&
    (formData.listingType === 'Service Available' ||
      formData.listingType === 'Service Needed');

  const categoryOptions = mockCategories.map((c) => ({
    value: c,
    label: c,
  }));

  const listingTypeOptions = listingTypes.map((t) => ({
    value: t,
    label: t,
  }));

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Post a listing
          </h1>
          <p className="text-slate-600">
            Structured forms make posting fast and clear. Fill out the fields relevant to what you're posting.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-green-900 font-medium">
              ✓ Listing posted successfully! (This is a mock - data not saved)
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ===== GENERAL SECTION ===== */}
          <div className="bg-white border border-slate-200 rounded p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Listing basics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FormSelect
                label="Listing type"
                name="listingType"
                value={formData.listingType}
                onChange={handleInputChange}
                options={listingTypeOptions}
                required
              />
              <FormSelect
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                options={categoryOptions}
                required
              />
            </div>

            {formData.category && (
              <div className="mb-6">
                <FormSelect
                  label="Subcategory"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleInputChange}
                  options={subcategoryOptions}
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <FormInput
                label="Title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., 80 CY Clean Fill Dirt – SE Calgary"
                hint="Be specific. Include key details in the title."
                required
              />
            </div>

            <div className="mb-6">
              <FormTextarea
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Explain what you're posting. Condition, any notes, why you're selling..."
                rows={5}
                hint="Be clear and honest. Include details that matter to contractors."
                required
              />
            </div>

            {/* Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FormSelect
                label="Price type"
                name="priceType"
                value={formData.priceType}
                onChange={handleInputChange}
                options={[
                  { value: 'fixed', label: 'Fixed price' },
                  { value: 'negotiable', label: 'Open to offers' },
                  { value: 'contact', label: 'Contact for pricing' },
                ]}
              />
              {formData.priceType !== 'contact' && (
                <FormInput
                  label="Price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              )}
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                name="makeOffer"
                checked={formData.makeOffer}
                onChange={handleInputChange}
                className="w-4 h-4"
              />
              <label className="text-sm text-slate-700">
                Allow buyers to make offers
              </label>
            </div>
          </div>

          {/* ===== LOCATION SECTION ===== */}
          <div className="bg-white border border-slate-200 rounded p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Location & contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FormInput
                label="Location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., NE Calgary"
                required
              />
              <FormInput
                label="Postal code / City"
                name="postalCode"
                type="text"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="e.g., T2A 1Z5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FormInput
                label="Contact name"
                name="contactName"
                type="text"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="403-555-1234"
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@company.com"
              />
            </div>
          </div>

          {/* ===== MATERIAL FIELDS ===== */}
          {showMaterialFields && (
            <div className="bg-white border border-slate-200 rounded p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Material details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Material type"
                  name="materialType"
                  type="text"
                  value={formData.materialType}
                  onChange={handleInputChange}
                  placeholder="e.g., Steel rebar, plywood, formwork"
                />
                <FormSelect
                  label="Condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  options={[
                    { value: 'excellent', label: 'Excellent' },
                    { value: 'good', label: 'Good' },
                    { value: 'fair', label: 'Fair' },
                    { value: 'as_is', label: 'As-is' },
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <FormInput
                  label="Quantity"
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g., 3"
                />
                <FormSelect
                  label="Unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  options={[
                    { value: 'pieces', label: 'Pieces' },
                    { value: 'bundles', label: 'Bundles' },
                    { value: 'sheets', label: 'Sheets' },
                    { value: 'SF', label: 'Square Feet' },
                    { value: 'LF', label: 'Linear Feet' },
                    { value: 'pallets', label: 'Pallets' },
                    { value: 'tons', label: 'Tons' },
                  ]}
                />
                <FormInput
                  label="Dimensions (optional)"
                  name="dimensions"
                  type="text"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  placeholder="e.g., 4x8"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="pickupOnly"
                    checked={formData.pickupOnly}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Pickup only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="deliveryAvailable"
                    checked={formData.deliveryAvailable}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">
                    Delivery available
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="palletized"
                    checked={formData.palletized}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Palletized</span>
                </label>
              </div>
            </div>
          )}

          {/* ===== DIRT & AGGREGATE FIELDS ===== */}
          {showDirtFields && (
            <div className="bg-white border border-slate-200 rounded p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Dirt & aggregate details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormSelect
                  label="Material type"
                  name="dirtType"
                  value={formData.dirtType}
                  onChange={handleInputChange}
                  options={[
                    { value: 'clean_fill', label: 'Clean Fill' },
                    { value: 'topsoil', label: 'Topsoil' },
                    { value: 'gravel', label: 'Gravel' },
                    { value: 'crushed_rock', label: 'Crushed Rock' },
                    { value: 'sand', label: 'Sand' },
                    { value: 'spoil', label: 'Spoil' },
                    { value: 'mixed_fill', label: 'Mixed Fill' },
                  ]}
                />
                <FormInput
                  label="Estimated quantity (CY)"
                  name="estimatedVolume"
                  type="number"
                  value={formData.estimatedVolume}
                  onChange={handleInputChange}
                  placeholder="e.g., 50"
                />
              </div>

              <div className="mb-6">
                <FormTextarea
                  label="Haul distance / delivery notes"
                  name="haulDistanceNote"
                  value={formData.haulDistanceNote}
                  onChange={handleInputChange}
                  placeholder="e.g., 10 km radius, or 'requires dump truck'"
                  rows={3}
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="loadingAvailable"
                    checked={formData.loadingAvailable}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Loading available</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="dumpTruckAccess"
                    checked={formData.dumpTruckAccess}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Dump truck access</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="readyNow"
                    checked={formData.readyNow}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Ready now</span>
                </label>
              </div>

              <div className="mt-6">
                <FormTextarea
                  label="Contamination / quality notes"
                  name="contaminationNote"
                  value={formData.contaminationNote}
                  onChange={handleInputChange}
                  placeholder="e.g., 'Clean - tested', 'May contain rocks and roots'"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* ===== CONCRETE FIELDS ===== */}
          {showConcreteFields && (
            <div className="bg-white border border-slate-200 rounded p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Concrete details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Mix type"
                  name="mixType"
                  type="text"
                  value={formData.mixType}
                  onChange={handleInputChange}
                  placeholder="e.g., 32 MPa, 35 MPa"
                />
                <FormInput
                  label="Volume remaining (CY)"
                  name="volumeRemaining"
                  type="number"
                  value={formData.volumeRemaining}
                  onChange={handleInputChange}
                  placeholder="e.g., 14"
                />
              </div>

              <div className="mb-6">
                <FormInput
                  label="Delivery window"
                  name="deliveryWindow"
                  type="text"
                  value={formData.deliveryWindow}
                  onChange={handleInputChange}
                  placeholder="e.g., 'Same day only', 'Must pump by 4 PM'"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="pumpRequired"
                    checked={formData.pumpRequired}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Pump required</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="shortLoad"
                    checked={formData.shortLoad}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Short load</span>
                </label>
              </div>
            </div>
          )}

          {/* ===== EQUIPMENT FIELDS ===== */}
          {showEquipmentFields && (
            <div className="bg-white border border-slate-200 rounded p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Equipment details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Equipment type"
                  name="equipmentType"
                  type="text"
                  value={formData.equipmentType}
                  onChange={handleInputChange}
                  placeholder="e.g., Skid steer, mini excavator"
                />
                <FormInput
                  label="Make/Model"
                  name="makeModel"
                  type="text"
                  value={formData.makeModel}
                  onChange={handleInputChange}
                  placeholder="e.g., Bobcat S650"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Year"
                  name="year"
                  type="number"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="2022"
                />
                <FormSelect
                  label="Pricing"
                  name="pricing"
                  value={formData.pricing}
                  onChange={handleInputChange}
                  options={[
                    { value: 'hourly', label: 'Hourly' },
                    { value: 'daily', label: 'Daily' },
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'monthly', label: 'Monthly' },
                  ]}
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="withOperator"
                    checked={formData.withOperator}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">
                    Available with operator
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="equipmentDeliveryAvailable"
                    checked={formData.equipmentDeliveryAvailable}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">
                    Delivery available
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* ===== HAULING FIELDS ===== */}
          {showHaulingFields && (
            <div className="bg-white border border-slate-200 rounded p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Hauling details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormSelect
                  label="Truck type"
                  name="truckType"
                  value={formData.truckType}
                  onChange={handleInputChange}
                  options={[
                    { value: 'pickup', label: 'Pickup' },
                    { value: 'dump_truck', label: 'Dump Truck' },
                    { value: 'tri_axle', label: 'Tri-Axle' },
                    { value: 'flatbed', label: 'Flatbed' },
                    { value: 'trailer', label: 'Trailer' },
                  ]}
                />
                <FormInput
                  label="Load capacity"
                  name="loadCapacity"
                  type="text"
                  value={formData.loadCapacity}
                  onChange={handleInputChange}
                  placeholder="e.g., 25 tons, 20 CY"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Service radius"
                  name="serviceRadius"
                  type="text"
                  value={formData.serviceRadius}
                  onChange={handleInputChange}
                  placeholder="e.g., 50 km"
                />
                <FormInput
                  label="Available dates"
                  name="availableDates"
                  type="text"
                  value={formData.availableDates}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekdays, after 2 PM"
                />
              </div>

              <div className="mb-6">
                <FormSelect
                  label="Haul type"
                  name="haulType"
                  value={formData.haulType}
                  onChange={handleInputChange}
                  options={[
                    { value: 'dirt', label: 'Dirt & aggregate' },
                    { value: 'concrete', label: 'Concrete' },
                    { value: 'demolition', label: 'Demolition debris' },
                    { value: 'general', label: 'General material' },
                  ]}
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="operatorIncluded"
                    checked={formData.operatorIncluded}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">
                    Operator included
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sameDay"
                    checked={formData.sameDay}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">
                    Same day available
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* ===== LABOR FIELDS ===== */}
          {showLaborFields && (
            <div className="bg-white border border-slate-200 rounded p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Labor & crew details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Trade"
                  name="trade"
                  type="text"
                  value={formData.trade}
                  onChange={handleInputChange}
                  placeholder="e.g., Concrete finishing, framing"
                />
                <FormInput
                  label="Crew size"
                  name="crewSize"
                  type="text"
                  value={formData.crewSize}
                  onChange={handleInputChange}
                  placeholder="e.g., 3-4 people"
                />
              </div>

              <div className="mb-6">
                <FormInput
                  label="Certifications"
                  name="certifications"
                  type="text"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  placeholder="e.g., Concrete finishing, class 5 driver"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Minimum booking"
                  name="minimumBooking"
                  type="text"
                  value={formData.minimumBooking}
                  onChange={handleInputChange}
                  placeholder="e.g., 1 day, 4 hours"
                />
                <FormInput
                  label="Travel radius"
                  name="travelRadius"
                  type="text"
                  value={formData.travelRadius}
                  onChange={handleInputChange}
                  placeholder="e.g., 50 km"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="insured"
                    checked={formData.insured}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">Fully insured</span>
                </label>
              </div>
            </div>
          )}

          {/* ===== SUBMIT SECTION ===== */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-slate-900 text-white rounded font-semibold hover:bg-slate-800"
            >
              Post Listing
            </button>
            <Link
              href="/listings"
              className="px-6 py-3 bg-slate-100 text-slate-900 rounded font-semibold hover:bg-slate-200"
            >
              Cancel
            </Link>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">ℹ️ Note:</span> This is a mock posting form. Data is not persisted. In production, listings would be saved to a database and displayed to other users.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
