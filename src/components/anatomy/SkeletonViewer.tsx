
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

// Define the skeletal parts and their information based on Britannica
interface SkeletalPart {
  id: string;
  name: string;
  description: string;
  function: string;
  svgPath: string;
  viewBox?: string;
}

const skeletalParts: SkeletalPart[] = [
  {
    id: 'skull',
    name: 'Skull',
    description: 'A complex structure containing 22 bones that protect the brain and form the face.',
    function: 'Protects the brain, supports facial structures, and houses sense organs for sight, smell, taste, and hearing.',
    svgPath: 'M100,30 C130,30 150,45 150,80 C150,115 130,130 100,140 C70,130 50,115 50,80 C50,45 70,30 100,30 Z',
  },
  {
    id: 'spine',
    name: 'Vertebral Column (Spine)',
    description: 'Contains 33 vertebrae divided into cervical, thoracic, lumbar, sacral, and coccygeal regions.',
    function: 'Supports the body\'s weight, protects the spinal cord, and enables flexibility and movement of the trunk.',
    svgPath: 'M100,140 C100,140 100,240 100,260 C100,270 95,270 100,280 C105,270 100,270 100,260 C100,240 100,140 100,140 Z',
  },
  {
    id: 'ribcage',
    name: 'Ribcage',
    description: '12 pairs of ribs forming a cage that protects vital organs in the thoracic cavity.',
    function: 'Protects the heart, lungs, and other thoracic organs while assisting in respiration through movement.',
    svgPath: 'M100,160 C120,160 140,170 140,190 C140,210 120,230 100,230 C80,230 60,210 60,190 C60,170 80,160 100,160 Z',
  },
  {
    id: 'shoulder',
    name: 'Shoulder Girdle',
    description: 'Formed by the clavicle (collarbone) and scapula (shoulder blade) on each side.',
    function: 'Connects the arms to the axial skeleton and provides attachment sites for numerous muscles.',
    svgPath: 'M60,165 C70,160 80,160 100,160 C120,160 130,160 140,165',
  },
  {
    id: 'pelvis',
    name: 'Pelvic Girdle',
    description: 'Consists of paired hip bones (ilium, ischium, and pubis) that connect to the sacrum.',
    function: 'Supports the weight of the upper body and transfers it to the lower limbs while protecting pelvic organs.',
    svgPath: 'M70,280 C70,290 90,310 100,310 C110,310 130,290 130,280 C130,280 120,290 100,290 C80,290 70,280 70,280 Z',
  },
  {
    id: 'humerus',
    name: 'Humerus',
    description: 'The long bone of the upper arm extending from shoulder to elbow.',
    function: 'Forms the ball-and-socket joint with the scapula and connects to the forearm at the elbow.',
    svgPath: 'M60,170 C50,170 45,190 45,210 C45,230 50,230 50,245 M140,170 C150,170 155,190 155,210 C155,230 150,230 150,245',
  },
  {
    id: 'radius-ulna',
    name: 'Radius & Ulna',
    description: 'Parallel long bones of the forearm; the ulna is on the pinky side and the radius on the thumb side.',
    function: 'Enable rotation of the forearm and provide attachments for muscles controlling the hand and fingers.',
    svgPath: 'M50,245 C50,260 55,270 55,280 C55,285 55,290 55,290 M150,245 C150,260 145,270 145,280 C145,285 145,290 145,290',
  },
  {
    id: 'hands',
    name: 'Hands',
    description: 'Complex structures with 27 bones in each: 8 carpals (wrist), 5 metacarpals (palm), and 14 phalanges (fingers).',
    function: 'Provide dexterity for precise manipulation of objects through a complex system of joints and tendons.',
    svgPath: 'M55,290 C55,300 50,305 45,310 C45,315 45,320 45,325 M55,290 C55,300 55,305 55,315 C55,320 55,325 55,330 M55,290 C55,300 60,305 65,315 C65,320 65,325 65,330 M145,290 C145,300 150,305 155,310 C155,315 155,320 155,325 M145,290 C145,300 145,305 145,315 C145,320 145,325 145,330 M145,290 C145,300 140,305 135,315 C135,320 135,325 135,330',
  },
  {
    id: 'femur',
    name: 'Femur',
    description: 'The longest and strongest bone in the body, extending from hip to knee.',
    function: 'Bears body weight during standing, walking, and running; forms hip joint superiorly and knee joint inferiorly.',
    svgPath: 'M85,310 C80,330 75,360 75,380 M115,310 C120,330 125,360 125,380',
  },
  {
    id: 'patella',
    name: 'Patella (Kneecap)',
    description: 'A sesamoid bone embedded in the quadriceps tendon that covers and protects the knee joint.',
    function: 'Increases leverage of the quadriceps muscle and protects the anterior surface of the knee joint.',
    svgPath: 'M75,380 C78,382 82,385 85,385 M125,380 C122,382 118,385 115,385',
  },
  {
    id: 'tibia-fibula',
    name: 'Tibia & Fibula',
    description: 'The tibia (shinbone) is the larger weight-bearing bone, while the fibula is the slender lateral bone.',
    function: 'Support body weight, provide attachment for leg muscles, and form the ankle joint with foot bones.',
    svgPath: 'M75,380 C75,410 75,440 80,450 M125,380 C125,410 125,440 120,450',
  },
  {
    id: 'feet',
    name: 'Feet',
    description: '26 bones in each foot: 7 tarsals (ankle), 5 metatarsals (midfoot), and 14 phalanges (toes).',
    function: 'Support body weight, absorb shock during locomotion, and provide leverage for propulsion during walking and running.',
    svgPath: 'M80,450 C75,455 70,455 65,455 C60,455 55,455 55,455 M80,450 C80,455 80,460 85,460 C90,460 95,460 100,460 M120,450 C125,455 130,455 135,455 C140,455 145,455 145,455 M120,450 C120,455 120,460 115,460 C110,460 105,460 100,460',
  },
];

const SkeletonViewer: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<SkeletalPart | null>(null);
  const [activeView, setActiveView] = useState("skeleton");

  const handlePartClick = (part: SkeletalPart) => {
    setSelectedPart(part);
    setActiveView("info");
  };

  return (
    <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="skeleton">Skeleton View</TabsTrigger>
        <TabsTrigger value="info">Part Information</TabsTrigger>
      </TabsList>
      <TabsContent value="skeleton" className="pt-6">
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 200 480" width="280" height="500" className="bg-white rounded-lg shadow-md">
            {skeletalParts.map((part) => (
              <Tooltip key={part.id}>
                <TooltipTrigger asChild>
                  <path
                    id={part.id}
                    d={part.svgPath}
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-wellness-600 hover:stroke-[3]"
                    onClick={() => handlePartClick(part)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{part.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </svg>
        </div>
        <div className="text-center text-sm text-gray-500">
          Click on any bone or joint to learn more
        </div>
      </TabsContent>
      <TabsContent value="info" className="pt-6">
        <Card>
          <CardContent className="pt-6">
            {selectedPart ? (
              <div>
                <h3 className="text-xl font-bold mb-2">{selectedPart.name}</h3>
                <p className="text-gray-700 mb-4">{selectedPart.description}</p>
                <h4 className="font-semibold text-sm text-gray-600 mb-1">Function:</h4>
                <p className="text-gray-700">{selectedPart.function}</p>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">Select a skeletal part from the skeleton view to see information</p>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SkeletonViewer;
