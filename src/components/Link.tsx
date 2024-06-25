'use client'

import { useRouter} from 'next/navigation';
import { useState } from 'react';


export default function Link() {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();
    
  return (
    <div>
      
    </div>
  )
}
