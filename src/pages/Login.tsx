
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher'>('student');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        navigate(`/dashboard/${selectedRole}`);
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const roleOptions = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access courses and track progress',
      icon: <BookOpen className="h-6 w-6" />,
      color: '#007D7A'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Create content and manage students',
      icon: <Users className="h-6 w-6" />,
      color: '#FF7F50'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5DC' }}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold" style={{ color: '#3E2723' }}>Sign In</CardTitle>
              <CardDescription className="text-gray-600">Welcome back! Please sign in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-sm font-medium" style={{ color: '#3E2723' }}>Select Your Role</Label>
                  <div className="grid gap-3">
                    {roleOptions.map((role) => (
                      <div
                        key={role.id}
                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                          selectedRole === role.id
                            ? 'border-gray-400 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedRole(role.id as 'student' | 'teacher')}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: role.color }}>
                            {role.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium" style={{ color: '#3E2723' }}>{role.title}</div>
                            <div className="text-sm text-gray-500">{role.description}</div>
                          </div>
                          {selectedRole === role.id && (
                            <Badge style={{ backgroundColor: '#007D7A', color: 'white' }}>Selected</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: '#3E2723' }}>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" style={{ color: '#3E2723' }}>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#007D7A' }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium hover:underline" style={{ color: '#FF7F50' }}>
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
