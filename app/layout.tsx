import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Krithik Raj | Robotics Engineer', description: 'Research Associate at Extreme Robotics Laboratory. ROS 2, SLAM, Computer Vision.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en' suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>)
}
