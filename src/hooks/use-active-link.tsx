import { useState } from 'react'
import { LinkType } from '@/constants/header-links';

export function useActiveLink() {
  const [isActive, setIsActive] = useState<LinkType>("#home");

  return { isActive, setIsActive }
}
