import { motion } from "framer-motion";
import { Shield, Eye, Layers, Truck } from "lucide-react";

const usps = [
  {
    icon: Shield,
    title: "Zuurvrije archiefkwaliteit",
    description: "Ons polypropyleen bevat geen schadelijke zuren die uw strips aantasten."
  },
  {
    icon: Eye,
    title: "Premium helder & scheurvast",
    description: "100 micron kristalhelder materiaal dat niet scheurt of vervormt."
  },
  {
    icon: Layers,
    title: "Modern, Silver & Golden Age",
    description: "Beschikbaar in drie formaten voor elke type strip en comic."
  },
  {
    icon: Truck,
    title: "Snelle levering BE & NL",
    description: "Snel en veilig geleverd in België en Nederland."
  }
];

const USPSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <usp.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{usp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
