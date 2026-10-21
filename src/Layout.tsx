import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@/contexts/AuthContext'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SmartHighlightCursor from '@/components/SmartHighlightCursor'

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SmartHighlightCursor />
        <Outlet />
        <FloatingWhatsApp />
        <Toaster />
        <Sonner />
      </AuthProvider>
    </QueryClientProvider>
  )
}
