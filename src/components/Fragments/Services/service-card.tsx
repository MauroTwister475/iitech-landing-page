"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SERVICES } from "./data";
import { motion } from "framer-motion";

export function ServiceCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap lg:flex lg:flex-col gap-8">
      {SERVICES.map(({ Icon, duration, title, description }) => (
        <motion.div
          className="transition-all ease-in-out"
          initial={{ x: "-1000vw" }}
          animate={{ x: 0 }}
          transition={{ duration }}
        >
          <Card
            key={title}
            className="hover:scale-110 ease-in transition-all cursor-pointer"
          >
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div className="w-full flex flex-col space-y-2">
                <div className="w-full flex items-center space-x-2 ">
                  <div className="w-max mt-1 bg-blue-600/20 p-1.5 rounded-2xl">
                    <Icon className="text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </div>
                <div>
                  <CardDescription className="text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
