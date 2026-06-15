import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@/contexts/AuthContext'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Outlet />
          <FloatingWhatsApp />
          <Toaster />
          <Sonner />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
