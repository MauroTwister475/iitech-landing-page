"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEPOIMENTS } from "./data";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DepoimentsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
      {DEPOIMENTS.map(({ image, name, userName, comment }) => (
        <motion.div
          key={name}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src={image} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>{comment}</CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
