"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cpu,
  Database,
  Zap,
  Network,
  Wifi,
  Settings,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(false);

   const [expandedCards, setExpandedCards] = useState({});

  // const toggleExpand = (index) => {
  //   setExpandedCards(prev => ({
  //     ...prev,
  //     [index]: !prev[index]
  //   }));
  // };

  const services = [
    {
      icon: Cpu,
      title: "Embedded Hardware Design",
      description:
        "Custom PCB design, schematic capture, and hardware architecture for your specific requirements.",
      features: [
        "Schematic design and PCB layout",
        "Component selection and sourcing",
        "Prototype development",
        "Design for manufacturing (DFM)",
        "Signal integrity analysis",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Database,
      title: "Firmware Development",
      description:
        "Custom firmware development for microcontrollers and embedded systems.",
      features: [
        "Real-time operating systems",
        "Device drivers and APIs",
        "Communication protocols",
        "Power management",
        "Security implementation",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "Quick turnaround prototyping to validate your concepts and ideas.",
      features: [
        "3D printing and CNC machining",
        "Electronics prototyping",
        "Functional testing",
        "Iterative design",
        "Proof of concept",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Network,
      title: "IoT Product Development",
      description:
        "End-to-end IoT product development from concept to production.",
      features: [
        "Sensor integration",
        "Cloud connectivity",
        "Mobile app development",
        "Data analytics",
        "Scalable architecture",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Wifi,
      title: "Wireless/Bluetooth/NB-IoT Integration",
      description:
        "Integration of various wireless communication protocols for your products.",
      features: [
        "Bluetooth Low Energy (BLE)",
        "WiFi and cellular connectivity",
        "LoRa and NB-IoT",
        "Mesh networking",
        "Security protocols",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Settings,
      title: "End-to-End Product Engineering",
      description:
        "Complete product development from initial concept to market-ready solution.",
      features: [
        "Requirements analysis",
        "System architecture",
        "Testing and validation",
        "Manufacturing support",
        "Documentation and training",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4"
              >
                {/* <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  Our Services
                </span> */}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
              >
                <span className="font-black">Our Services</span>
                <span className="gradient-text">
                  {" "}
                  - Custom Embedded Solutions For Every Need
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                From concept to production, we provide comprehensive embedded
                systems development services tailored to your industry and
                requirements.
              </motion.p>
            </div>
          </ScrollReveal>

{/* Service grid no 3 */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
      {services.map((service, index) => {
        // const isExpanded = expandedCards[index];
        
        return (
          <ScrollReveal key={index} delay={index * 0.1}>
            <Card className="group hover:shadow-xl transition-all duration-300 border border-border h-[420px] w-full flex flex-col overflow-hidden">
              <CardHeader className="pb-4 flex-shrink-0">
                <div
                  className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col h-full p-6 pt-0">
                <motion.p 
                  className="text-muted-foreground mb-4 flex-grow line-clamp-3"
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>

                <motion.ul 
                  className="space-y-2 mb-4 flex-grow"
                  initial={{ height: 0 }}
                  animate={{ height:   "auto"  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </motion.ul>

                <div className="flex flex-col gap-2 mt-auto">
                  {/* {!isExpanded && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs font-medium text-primary underline self-start hover:text-primary/80 transition-colors"
                    >
                      View more
                    </button>
                  )} */}
                  
                  <Button
                    variant="outline"
                    className="w-full group/btn transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                    asChild
                  >
                    {/* <Link href="/contact">
                      <span className="flex items-center justify-center gap-2 py-3">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link> */}
                  </Button>

                  {/* {isExpanded && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs font-medium text-primary underline self-start hover:text-primary/80 transition-colors"
                    >
                      View less
                    </button>
                  )} */}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>


{/* servicfe grid no 2 try */}
{/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
  {services.map((service, index) => (
    <ScrollReveal key={index} delay={index * 0.1}>
      <Card className="group hover:shadow-xl transition-all duration-300 border border-border h-[420px] w-full flex flex-col overflow-hidden">
        <CardHeader className="pb-4 flex-shrink-0">
          <div
            className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <service.icon className={`w-6 h-6 ${service.color}`} />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground text-center">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col h-full p-6 pt-0">
          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
            {service.description}
          </p>
          <ul className="space-y-2 mb-6 flex-grow">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <motion.div 
            className="flex-grow-0"
            initial={{ height: 0 }}
            animate={{ height: expanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          />
          <Button
            variant="outline"
            className="w-full group/btn mt-auto transform transition-all duration-300 hover:scale-105 hover:shadow-md"
            asChild
          >
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 py-3">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </ScrollReveal>
  ))}
</div> */}




          {/* Services Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group/btn mt-auto"
                      asChild
                    >
                      <Link href="/contact">
                        <span className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div> */}
          <section className="mt-10 flex items-center justify-center">
            <div className="text-center">
         <Link href="/contact">
                      <Button className="group relative overflow-hidden flex flex-" size="xl">
                        <span className="relative z-10 flex items-center gap-2">
                          Learn More
                          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /> */}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                </Link>
                </div>
                </section>

          {/* CTA Section */}
          <ScrollReveal delay={0.8}>
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm border border-border shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Let's discuss your requirements and create a custom solution
                  that fits your needs perfectly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden"
                    asChild
                  >
                    <Link href="/contact">
                      <span className="relative z-10 flex items-center gap-2">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Schedule a Call</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
