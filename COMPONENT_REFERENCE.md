/\*\*

- Component Showcase & Documentation
- Reference for all available components and their usage
  \*/

// ============================================================
// UI COMPONENTS
// ============================================================

/\*\*

- BUTTON COMPONENT
-
- Versatile button with multiple variants and sizes
-
- Variants: primary | secondary | outline | ghost
- Sizes: sm | md | lg
-
- @example
- <Button variant="primary" size="lg">Submit</Button>
- <Button variant="outline" size="sm">Cancel</Button>
  \*/

/\*\*

- INPUT COMPONENT
-
- Text input with validation states
-
- Props:
- - error?: boolean
- - helperText?: string
-
- @example
- <Input
- placeholder="Enter your name"
- error={nameError}
- helperText={nameError ? "Name is required" : ""}
- />
  \*/

/\*\*

- SELECT COMPONENT
-
- Dropdown select element
-
- Props:
- - error?: boolean
- - helperText?: string
-
- @example
- <Select error={selectError} helperText={selectHelperText}>
- <option>Option 1</option>
- <option>Option 2</option>
- </Select>
  */

/\*\*

- TEXTAREA COMPONENT
-
- Multi-line text input
-
- Props:
- - error?: boolean
- - helperText?: string
- - rows?: number
-
- @example
- <Textarea
- placeholder="Enter your message"
- rows={5}
- error={messageError}
- />
  \*/

/\*\*

- MODAL COMPONENT
-
- Flexible modal dialog
-
- Props:
- - open: boolean - Controls visibility
- - onClose: () => void - Close callback
- - title?: string - Modal header title
- - size?: 'sm' | 'md' | 'lg' - Modal width
-
- @example
- <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
- <p>Are you sure?</p>
- <Button onClick={handleConfirm}>Yes</Button>
- </Modal>
  */

// ============================================================
// CARD COMPONENTS
// ============================================================

/\*\*

- DOCTOR CARD
-
- Display doctor information
-
- Props:
- - doctor: Doctor object with:
- - id, name, specialty, title, experienceYears, slug
-
- @example
- <DoctorCard doctor={doctorData} />
  */

/\*\*

- BLOG CARD
-
- Display blog post preview
-
- Props:
- - post: BlogPost object with:
- - title, category, excerpt, publishedAt, slug
-
- @example
- <BlogCard post={blogPostData} />
  */

/\*\*

- SERVICE CARD
-
- Display healthcare service
-
- Props:
- - service: ClinicService object with:
- - title, icon, shortDescription, slug
-
- @example
- <ServiceCard service={serviceData} />
  */

/\*\*

- TESTIMONIAL CARD
-
- Display customer review
-
- Props:
- - review: Review object with:
- - rating (1-5), message, patientName, patientTitle?
-
- @example
- <TestimonialCard review={reviewData} />
  */

// ============================================================
// LAYOUT COMPONENTS
// ============================================================

/\*\*

- CONTAINER
-
- Max-width wrapper for consistent padding
- Default max-width: 1536px (6xl)
-
- Props:
- - className?: string
- - children: React.ReactNode
-
- @example
- <Container>
- <h1>Page Title</h1>
- </Container>
  */

/\*\*

- NAVBAR
-
- Sticky header with navigation
- Auto-hides MobileMenu on small screens
-
- @example
- <Navbar /> (No props required)
  \*/

/\*\*

- FOOTER
-
- Premium footer with multiple sections
- Includes quick links, support, and contact info
-
- @example
- <Footer /> (No props required)
  */

// ============================================================
// FORM COMPONENTS
// ============================================================

/\*\*

- FORM FIELD
-
- Wrapper for form input with label
-
- Props:
- - label: string - Label text
- - htmlFor: string - Input ID
- - required?: boolean - Show required asterisk
- - error?: string - Error message
- - helperText?: string - Helper text below input
- - children: React.ReactNode - Input element
-
- @example
- <FormField
- label="Email"
- htmlFor="email"
- required
- error={emailError}
- >
- <Input id="email" type="email" />
- </FormField>
  */

/\*\*

- SUBMIT BUTTON
-
- Submit button with loading state
-
- Props:
- - label: string - Button text
- - loading?: boolean - Show loading spinner
- - disabled?: boolean - Disable button
-
- @example
- <SubmitButton label="Submit" loading={isSubmitting} />
  */

// ============================================================
// SHARED COMPONENTS
// ============================================================

/\*\*

- PAGE BANNER
-
- Header section for pages
-
- Props:
- - title: string
- - description?: string
-
- @example
- <PageBanner
- title="Our Services"
- description="Comprehensive healthcare services"
- />
  \*/

/\*\*

- SECTION HEADER
-
- Section title with subtitle
-
- Props:
- - title: string
- - subtitle?: string
- - centered?: boolean
- - highlight?: string - Badge text
-
- @example
- <SectionHeader
- title="Meet Our Team"
- subtitle="Experienced healthcare professionals"
- highlight="OUR TEAM"
- centered
- />
  \*/

/\*\*

- EMPTY STATE
-
- Display when no data available
-
- Props:
- - title: string
- - description: string
- - icon?: React.ReactNode
- - action?: { label: string; onClick: () => void }
-
- @example
- <EmptyState
- title="No appointments"
- description="You haven't booked any appointments yet"
- action={{ label: "Book Now", onClick: handleBook }}
- />
  \*/

/\*\*

- CTA SECTION
-
- Call-to-action section
-
- Props:
- - title: string
- - description: string
- - buttonLabel: string
- - buttonHref: string
- - variant?: 'dark' | 'light' | 'gradient'
-
- @example
- <CTASection
- title="Ready to book?"
- description="Schedule your appointment today"
- buttonLabel="Book Now"
- buttonHref="/appointment"
- variant="dark"
- />
  \*/

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/\*\*

- HTTP CLIENT UTILITIES
-
- Available functions:
- - httpGet<T>(endpoint)
- - httpPost<T>(endpoint, data)
- - httpPut<T>(endpoint, data)
- - httpDelete<T>(endpoint)
- - httpPatch<T>(endpoint, data)
-
- @example
- import { httpGet, httpPost } from "@/lib";
-
- const response = await httpGet("/doctors");
- const newAppointment = await httpPost("/appointments", appointmentData);
  \*/

/\*\*

- API RESPONSE HANDLER
-
- Methods:
- - ApiResponseHandler.parse<T>(data) - Parse response
- - ApiResponseHandler.isSuccess<T>(response) - Check success
- - ApiResponseHandler.getData<T>(response) - Extract data
- - ApiResponseHandler.getErrorMessage<T>(response) - Get error message
-
- @example
- import { ApiResponseHandler } from "@/lib";
-
- const response = await httpGet("/doctors");
- if (ApiResponseHandler.isSuccess(response)) {
- const doctors = ApiResponseHandler.getData(response);
- }
  \*/

/\*\*

- CLASS NAME UTILITY
-
- Combine and conditionally apply class names
-
- @example
- import { cn } from "@/lib";
-
- const classes = cn(
- "base-class",
- isActive && "active-class",
- { "conditional-class": showCondition }
- );
  \*/

// ============================================================
// CONSTANTS & TYPES
// ============================================================

/\*\*

- API ENDPOINTS
-
- Centralized API endpoint definitions
-
- Available:
- - API_ENDPOINTS.DOCTORS.LIST
- - API_ENDPOINTS.DOCTORS.GET(id)
- - API_ENDPOINTS.APPOINTMENTS.LIST
- - etc.
-
- @example
- import { API_ENDPOINTS } from "@/lib";
-
- const response = await httpGet(API_ENDPOINTS.DOCTORS.LIST);
  \*/

/\*\*

- ERROR MESSAGES & SUCCESS MESSAGES
-
- Predefined messages for consistency
-
- @example
- import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/lib";
-
- console.error(ERROR_MESSAGES.NETWORK_ERROR);
- console.log(SUCCESS_MESSAGES.APPOINTMENT_BOOKED);
  \*/

/\*\*

- ROUTES
-
- Centralized route definitions
-
- @example
- import { ROUTES } from "@/constants";
-
- <Link href={ROUTES.appointment}>Book</Link>
- <Link href={ROUTES.doctor}>Doctors</Link>
  */

// ============================================================
// COMPLETE FORM EXAMPLE
// ============================================================

/\*\*

- Complete form implementation example
-
- import { useState } from "react";
- import {
- FormField,
- Input,
- Select,
- Textarea,
- SubmitButton
- } from "@/components";
-
- export function ContactForm() {
- const [formData, setFormData] = useState({
-     name: "",
-     email: "",
-     message: ""
- });
- const [loading, setLoading] = useState(false);
-
- const handleSubmit = async (e) => {
-     e.preventDefault();
-     setLoading(true);
-     // API call here
-     setLoading(false);
- };
-
- return (
-     <form onSubmit={handleSubmit} className="space-y-4">
-       <FormField
-         label="Name"
-         htmlFor="name"
-         required
-       >
-         <Input
-           id="name"
-           placeholder="Your name"
-           value={formData.name}
-           onChange={(e) => setFormData({...formData, name: e.target.value})}
-         />
-       </FormField>
-
-       <FormField
-         label="Email"
-         htmlFor="email"
-         required
-       >
-         <Input
-           id="email"
-           type="email"
-           placeholder="your@email.com"
-           value={formData.email}
-           onChange={(e) => setFormData({...formData, email: e.target.value})}
-         />
-       </FormField>
-
-       <FormField
-         label="Message"
-         htmlFor="message"
-         required
-       >
-         <Textarea
-           id="message"
-           placeholder="Your message"
-           rows={5}
-           value={formData.message}
-           onChange={(e) => setFormData({...formData, message: e.target.value})}
-         />
-       </FormField>
-
-       <SubmitButton label="Send Message" loading={loading} />
-     </form>
- );
- }
  \*/
