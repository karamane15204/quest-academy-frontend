
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin login attempt:', { email, password });
    
    if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/dashboard/admin');
    } else {
      setError('Invalid admin credentials. Access denied.');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#657165' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#E8B4B8' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold" style={{ color: '#657165' }}>Admin Access</CardTitle>
              <CardDescription className="text-gray-600">
                Restricted area - Authorized personnel only
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleAdminLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: '#657165' }}>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" style={{ color: '#657165' }}>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#E8B4B8' }}
                >
                  Access Admin Panel
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Not an admin?{' '}
                  <Link to="/login" className="font-medium hover:underline" style={{ color: '#E8B4B8' }}>
                    Regular login here
                  </Link>
                </p>
              </div>

              <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: '#F7DDD2' }}>
                <p className="text-xs text-center" style={{ color: '#657165' }}>
                  Demo credentials: admin@example.com / admin123
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
