"use client";
import { useState, useRef, ChangeEvent, MouseEvent, useEffect } from "react";

export default function ContactForm() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   budget: "",
  //   companyName: "",
  //   websiteUrl: "",
  //   services: [] as string[],
  //   message: "",
  // });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [countryCode, setCountryCode] = useState("+92");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const formContentRef = useRef(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Budget options
  const budgetOptions = [
    { value: "0-500", label: "$0-$500" },
    { value: "500-1000", label: "$500-$1000" },
    { value: "1000-5000", label: "$1000-$5000" },
    { value: "5000+", label: "$5000+" },
  ];

  const servicesOptions = [
    { value: "genai", label: "Generative AI Applications" },
    { value: "agent", label: "Autonomous Agent Development" },
    { value: "llm", label: "LLM Integration & Fine-Tuning" },
    { value: "cx", label: "AI-Based Customer Experience (CX)" },
    { value: "sales", label: "AI-Powered Sales & Marketing" },
    { value: "ml", label: "Machine Learning, Analytics & Computer Vision" },
    { value: "strategy", label: "Enterprise AI Strategy & Automation" },
    { value: "webmobile", label: "Web & Mobile App Development" },
    { value: "mvp", label: "Product Strategy & MVP Development" },
    { value: "ecommerce", label: "E-commerce & Plugin Development" },
    { value: "devops", label: "DevOps, Integrations & Infrastructure" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const toggleServiceSelection = (value: string) => {
  //   setFormData((prevState) => {
  //     const services = [...prevState.services];
  //     const index = services.indexOf(value);

  //     if (index === -1) {
  //       // Add the service if not already selected
  //       services.push(value);
  //     } else {
  //       // Remove the service if already selected
  //       services.splice(index, 1);
  //     }

  //     return {
  //       ...prevState,
  //       services,
  //     };
  //   });
  // };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setShowServicesDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
    });
    setCountryCode("+92");
    setShowServicesDropdown(false);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      setSubmitError("Please fill in both name and email.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Capture UTM parameters and source page
    const urlParams = new URLSearchParams(window.location.search);
    const submissionData = {
      ...formData,
      sourcePage: window.location.pathname,
      utmSource: urlParams.get("utm_source"),
      utmMedium: urlParams.get("utm_medium"),
      utmCampaign: urlParams.get("utm_campaign"),
      utmTerm: urlParams.get("utm_term"),
      utmContent: urlParams.get("utm_content"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
          setIsSubmitted(false);
        }, 3000);
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to connect to the server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex flex-col h-full w-full bg-card p-4 md:p-6 rounded-xl overflow-hidden"
      style={{ minHeight: "720px" }}
    >
      <div className="flex-none">
        <h1 className="text-[14px] sm:text-[24px] font-bold text-foreground mb-1">
          Get In Touch
        </h1>
        <p className="text-muted-foreground text-[12px] sm:text-[16px] mb-4">
          Reach out to explore how we can work together.
        </p>
      </div>

      <div className="flex-grow overflow-auto">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center h-full text-center mr-8 sm:mt-0">
            <h2 className="text-3xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-foreground text-xl mb-2">
              Your message has been received.
            </p>
            <p className="text-muted-foreground">
              We'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="h-full overflow-y-auto" ref={formContentRef}>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  First Name<span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Last Name<span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                />
              </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Full Name<span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Email<span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                />
              </div>
              {/* 
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Phone Number<span className="text-primary">*</span>
                </label>
                <div className="flex">
                  <div className="relative">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="h-full rounded-l-md border border-r-0 border-border bg-transparent py-2 pl-2 pr-6 text-foreground appearance-none focus:outline-none focus:border-primary"
                    >
                      <option value="+93">+93</option>
                      <option value="+355">+355</option>
                      <option value="+213">+213</option>
                      <option value="+376">+376</option>
                      <option value="+244">+244</option>
                      <option value="+1">+1</option>
                      <option value="+54">+54</option>
                      <option value="+374">+374</option>
                      <option value="+61">+61</option>
                      <option value="+43">+43</option>
                      <option value="+994">+994</option>
                      <option value="+973">+973</option>
                      <option value="+880">+880</option>
                      <option value="+375">+375</option>
                      <option value="+32">+32</option>
                      <option value="+501">+501</option>
                      <option value="+229">+229</option>
                      <option value="+975">+975</option>
                      <option value="+591">+591</option>
                      <option value="+387">+387</option>
                      <option value="+267">+267</option>
                      <option value="+55">+55</option>
                      <option value="+673">+673</option>
                      <option value="+359">+359</option>
                      <option value="+226">+226</option>
                      <option value="+257">+257</option>
                      <option value="+855">+855</option>
                      <option value="+237">+237</option>
                      <option value="+238">+238</option>
                      <option value="+236">+236</option>
                      <option value="+235">+235</option>
                      <option value="+56">+56</option>
                      <option value="+86">+86</option>
                      <option value="+57">+57</option>
                      <option value="+269">+269</option>
                      <option value="+242">+242</option>
                      <option value="+506">+506</option>
                      <option value="+385">+385</option>
                      <option value="+53">+53</option>
                      <option value="+357">+357</option>
                      <option value="+420">+420</option>
                      <option value="+45">+45</option>
                      <option value="+253">+253</option>
                      <option value="+670">+670</option>
                      <option value="+593">+593</option>
                      <option value="+20">+20</option>
                      <option value="+503">+503</option>
                      <option value="+240">+240</option>
                      <option value="+291">+291</option>
                      <option value="+372">+372</option>
                      <option value="+251">+251</option>
                      <option value="+679">+679</option>
                      <option value="+358">+358</option>
                      <option value="+33">+33</option>
                      <option value="+241">+241</option>
                      <option value="+220">+220</option>
                      <option value="+995">+995</option>
                      <option value="+49">+49</option>
                      <option value="+233">+233</option>
                      <option value="+30">+30</option>
                      <option value="+502">+502</option>
                      <option value="+224">+224</option>
                      <option value="+245">+245</option>
                      <option value="+592">+592</option>
                      <option value="+509">+509</option>
                      <option value="+504">+504</option>
                      <option value="+36">+36</option>
                      <option value="+354">+354</option>
                      <option value="+91">+91</option>
                      <option value="+62">+62</option>
                      <option value="+98">+98</option>
                      <option value="+964">+964</option>
                      <option value="+353">+353</option>
                      <option value="+972">+972</option>
                      <option value="+39">+39</option>
                      <option value="+81">+81</option>
                      <option value="+962">+962</option>
                      <option value="+7">+7</option>
                      <option value="+254">+254</option>
                      <option value="+686">+686</option>
                      <option value="+850">+850</option>
                      <option value="+82">+82</option>
                      <option value="+965">+965</option>
                      <option value="+996">+996</option>
                      <option value="+856">+856</option>
                      <option value="+371">+371</option>
                      <option value="+961">+961</option>
                      <option value="+266">+266</option>
                      <option value="+231">+231</option>
                      <option value="+218">+218</option>
                      <option value="+423">+423</option>
                      <option value="+370">+370</option>
                      <option value="+352">+352</option>
                      <option value="+389">+389</option>
                      <option value="+261">+261</option>
                      <option value="+265">+265</option>
                      <option value="+60">+60</option>
                      <option value="+960">+960</option>
                      <option value="+223">+223</option>
                      <option value="+356">+356</option>
                      <option value="+692">+692</option>
                      <option value="+222">+222</option>
                      <option value="+230">+230</option>
                      <option value="+52">+52</option>
                      <option value="+691">+691</option>
                      <option value="+373">+373</option>
                      <option value="+377">+377</option>
                      <option value="+976">+976</option>
                      <option value="+382">+382</option>
                      <option value="+212">+212</option>
                      <option value="+258">+258</option>
                      <option value="+95">+95</option>
                      <option value="+264">+264</option>
                      <option value="+674">+674</option>
                      <option value="+977">+977</option>
                      <option value="+31">+31</option>
                      <option value="+64">+64</option>
                      <option value="+505">+505</option>
                      <option value="+227">+227</option>
                      <option value="+234">+234</option>
                      <option value="+47">+47</option>
                      <option value="+968">+968</option>
                      <option value="+92">+92</option>
                      <option value="+680">+680</option>
                      <option value="+970">+970</option>
                      <option value="+507">+507</option>
                      <option value="+675">+675</option>
                      <option value="+595">+595</option>
                      <option value="+51">+51</option>
                      <option value="+63">+63</option>
                      <option value="+48">+48</option>
                      <option value="+351">+351</option>
                      <option value="+974">+974</option>
                      <option value="+40">+40</option>
                      <option value="+250">+250</option>
                      <option value="+685">+685</option>
                      <option value="+378">+378</option>
                      <option value="+239">+239</option>
                      <option value="+966">+966</option>
                      <option value="+221">+221</option>
                      <option value="+381">+381</option>
                      <option value="+248">+248</option>
                      <option value="+232">+232</option>
                      <option value="+65">+65</option>
                      <option value="+421">+421</option>
                      <option value="+386">+386</option>
                      <option value="+677">+677</option>
                      <option value="+252">+252</option>
                      <option value="+27">+27</option>
                      <option value="+211">+211</option>
                      <option value="+34">+34</option>
                      <option value="+94">+94</option>
                      <option value="+249">+249</option>
                      <option value="+597">+597</option>
                      <option value="+268">+268</option>
                      <option value="+46">+46</option>
                      <option value="+41">+41</option>
                      <option value="+963">+963</option>
                      <option value="+886">+886</option>
                      <option value="+992">+992</option>
                      <option value="+255">+255</option>
                      <option value="+66">+66</option>
                      <option value="+228">+228</option>
                      <option value="+676">+676</option>
                      <option value="+216">+216</option>
                      <option value="+90">+90</option>
                      <option value="+993">+993</option>
                      <option value="+688">+688</option>
                      <option value="+256">+256</option>
                      <option value="+380">+380</option>
                      <option value="+971">+971</option>
                      <option value="+44">+44</option>
                      <option value="+598">+598</option>
                      <option value="+998">+998</option>
                      <option value="+678">+678</option>
                      <option value="+379">+379</option>
                      <option value="+58">+58</option>
                      <option value="+84">+84</option>
                      <option value="+967">+967</option>
                      <option value="+260">+260</option>
                      <option value="+263">+263</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-foreground">
                      <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-r-md border border-border bg-transparent p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                  />
                </div>
              </div> */}
            </div>

            {/* Budget Field */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Budget<span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary appearance-none"
                  >
                    <option value="" disabled>
                      Select Budget Range
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-foreground">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Company Name<span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                />
              </div>
            </div> */}

            {/* Company Name and Website URL */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="websiteUrl"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Website URL/Link
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
                />
              </div>
              <div ref={servicesDropdownRef}>
                <label
                  htmlFor="services"
                  className="block text-foreground text-[12px] sm:text-[18px] mb-1"
                >
                  Service<span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div
                    className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary cursor-pointer flex justify-between items-center"
                    onClick={() =>
                      setShowServicesDropdown(!showServicesDropdown)
                    }
                  >
                    <div className="flex flex-wrap gap-1 max-w-full">
                      {formData.services.length === 0 ? (
                        <span className="text-muted-foreground">
                          Select Services
                        </span>
                      ) : (
                        formData.services.map((service) => {
                          const serviceOption = servicesOptions.find(
                            (option) => option.value === service
                          );
                          return (
                            <span
                              key={service}
                              className="bg-primary/20 text-foreground px-2 py-1 rounded-md text-sm flex items-center"
                            >
                              {serviceOption?.label}
                              <button
                                type="button"
                                className="ml-1 text-foreground hover:text-red-400"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleServiceSelection(service);
                                }}
                              >
                                ×
                              </button>
                            </span>
                          );
                        })
                      )}
                    </div>
                    <svg
                      className={`h-4 w-4 fill-current transition-transform ${
                        showServicesDropdown ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>

                  {showServicesDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-surface-panel border border-border rounded-md py-1 shadow-lg max-h-60 overflow-auto">
                      {servicesOptions.map((option) => (
                        <div
                          key={option.value}
                          className="px-3 py-2 hover:bg-neutral-800 cursor-pointer flex items-center"
                          onClick={() => toggleServiceSelection(option.value)}
                        >
                          <div
                            className={`w-4 h-4 mr-2 border ${
                              formData.services.includes(option.value)
                                ? "bg-primary border-primary"
                                : "border-muted-foreground"
                            } flex items-center justify-center`}
                          >
                            {formData.services.includes(option.value) && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 text-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-foreground text-[12px] sm:text-[18px]">
                            {option.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-foreground text-[12px] sm:text-[18px] mb-1"
              >
                How can we Help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border border-border rounded-md p-2 text-foreground text-[12px] sm:text-[18px] focus:outline-none focus:border-primary"
              ></textarea>
            </div> */}

            {submitError && (
              <p className="text-red-500 text-sm mb-4 text-center">{submitError}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground text-[12px] sm:text-[18px] font-medium py-3 px-4 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get My Free AI Audit"}
            </button>

            <p className="text-center text-muted-foreground mt-4 text-[12px] sm:text-[18px]">
              We respect your inbox. No spam, no sharing your details.
            </p>
            {/* <p className="text-center text-muted-foreground mt-4 text-[12px] sm:text-[18px]">
              By contacting us, you agree to our{" "}
              <a href="#" className="text-foreground underline">
                Terms & Conditions
              </a>{" "}
              of service and{" "}
              <a href="#" className="text-foreground underline">
                Privacy Policy
              </a>
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
}