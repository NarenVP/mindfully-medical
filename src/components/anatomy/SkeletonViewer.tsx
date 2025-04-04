
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CircleDot } from 'lucide-react';

// Define the skeletal parts and their information based on Britannica
interface SkeletalPart {
  id: string;
  name: string;
  description: string;
  function: string;
  coordinates: {
    x: number;
    y: number;
  };
}

const skeletalParts: SkeletalPart[] = [
  {
    id: 'skull',
    name: 'Skull',
    description: 'A complex structure containing 22 bones that protect the brain and form the face.',
    function: 'Protects the brain, supports facial structures, and houses sense organs for sight, smell, taste, and hearing.',
    coordinates: { x: 50, y: 10 }
  },
  {
    id: 'spine',
    name: 'Vertebral Column (Spine)',
    description: 'Contains 33 vertebrae divided into cervical, thoracic, lumbar, sacral, and coccygeal regions.',
    function: 'Supports the body\'s weight, protects the spinal cord, and enables flexibility and movement of the trunk.',
    coordinates: { x: 50, y: 33 }
  },
  {
    id: 'ribcage',
    name: 'Ribcage',
    description: '12 pairs of ribs forming a cage that protects vital organs in the thoracic cavity.',
    function: 'Protects the heart, lungs, and other thoracic organs while assisting in respiration through movement.',
    coordinates: { x: 50, y: 23 }
  },
  {
    id: 'shoulder',
    name: 'Shoulder Girdle',
    description: 'Formed by the clavicle (collarbone) and scapula (shoulder blade) on each side.',
    function: 'Connects the arms to the axial skeleton and provides attachment sites for numerous muscles.',
    coordinates: { x: 48, y: 17 }
  },
  {
    id: 'pelvis',
    name: 'Pelvic Girdle',
    description: 'Consists of paired hip bones (ilium, ischium, and pubis) that connect to the sacrum.',
    function: 'Supports the weight of the upper body and transfers it to the lower limbs while protecting pelvic organs.',
    coordinates: { x: 50, y: 48 }
  },
  {
    id: 'humerus',
    name: 'Humerus',
    description: 'The long bone of the upper arm extending from shoulder to elbow.',
    function: 'Forms the ball-and-socket joint with the scapula and connects to the forearm at the elbow.',
    coordinates: { x: 46, y: 27 }
  },
  {
    id: 'radius-ulna',
    name: 'Radius & Ulna',
    description: 'Parallel long bones of the forearm; the ulna is on the pinky side and the radius on the thumb side.',
    function: 'Enable rotation of the forearm and provide attachments for muscles controlling the hand and fingers.',
    coordinates: { x: 43, y: 37 }
  },
  {
    id: 'hands',
    name: 'Hands',
    description: 'Complex structures with 27 bones in each: 8 carpals (wrist), 5 metacarpals (palm), and 14 phalanges (fingers).',
    function: 'Provide dexterity for precise manipulation of objects through a complex system of joints and tendons.',
    coordinates: { x: 40, y: 50 }
  },
  {
    id: 'femur',
    name: 'Femur',
    description: 'The longest and strongest bone in the body, extending from hip to knee.',
    function: 'Bears body weight during standing, walking, and running; forms hip joint superiorly and knee joint inferiorly.',
    coordinates: { x: 48, y: 61 }
  },
  {
    id: 'patella',
    name: 'Patella (Kneecap)',
    description: 'A sesamoid bone embedded in the quadriceps tendon that covers and protects the knee joint.',
    function: 'Increases leverage of the quadriceps muscle and protects the anterior surface of the knee joint.',
    coordinates: { x: 48, y: 68 }
  },
  {
    id: 'tibia-fibula',
    name: 'Tibia & Fibula',
    description: 'The tibia (shinbone) is the larger weight-bearing bone, while the fibula is the slender lateral bone.',
    function: 'Support body weight, provide attachment for leg muscles, and form the ankle joint with foot bones.',
    coordinates: { x: 48, y: 85 }
  },
  {
    id: 'feet',
    name: 'Feet',
    description: '26 bones in each foot: 7 tarsals (ankle), 5 metatarsals (midfoot), and 14 phalanges (toes).',
    function: 'Support body weight, absorb shock during locomotion, and provide leverage for propulsion during walking and running.',
    coordinates: { x: 48, y: 94 }
  },
];

const SkeletonViewer: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<SkeletalPart | null>(null);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  const handlePartClick = (part: SkeletalPart) => {
    setSelectedPart(part);
    setOpenPopoverId(part.id);
  };

  const handleClosePopover = () => {
    setOpenPopoverId(null);
  };

  return (
    <TooltipProvider>
      <div className="relative flex justify-center mb-4">
        <img 
          src="/lovable-uploads/af4ca345-dbef-4e45-bd18-4f043034e84e.png" 
          alt="Human Skeleton" 
          className="max-h-[600px] object-contain"
        />
        {skeletalParts.map((part) => (
          <Popover key={part.id} open={openPopoverId === part.id} onOpenChange={(open) => {
            if (open) setOpenPopoverId(part.id);
            else setOpenPopoverId(null);
          }}>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <div
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${part.coordinates.x}%`,
                      top: `${part.coordinates.y}%`,
                    }}
                    onClick={() => handlePartClick(part)}
                  >
                    <div className="h-3 w-3 rounded-full bg-blue border-2 border-white shadow-sm flex items-center justify-center hover:scale-125 transition-transform">
                      {/* The marker circle */}
                    </div>
                  </div>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent className="bg-navy text-white">
                <p>{part.name}</p>
              </TooltipContent>
            </Tooltip>
            <PopoverContent className="w-80 p-4 bg-white border border-blue-light shadow-md" onInteractOutside={handleClosePopover}>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy">{part.name}</h3>
                <p className="text-navy-light">{part.description}</p>
                <h4 className="font-semibold text-sm text-blue mt-3 mb-1">Function:</h4>
                <p className="text-navy-light">{part.function}</p>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="text-center text-sm text-blue">
        Click on any marker to learn more about that part of the skeleton
      </div>
    </TooltipProvider>
  );
};

export default SkeletonViewer;
