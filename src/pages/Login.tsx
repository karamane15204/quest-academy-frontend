
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin'>('student');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    console.log('Login attempt:', { email, password, role: selectedRole });
    
    // Redirect based on selected role
    navigate(`/dashboard/${selectedRole}`);
  };

  const roleOptions = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access courses and track progress',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Create content and manage students',
      icon: <Users className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage platform and users',
      icon: <Award className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Go Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
              <CardDescription>Welcome back! Please sign in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Select Your Role</Label>
                  <div className="grid gap-3">
                    {roleOptions.map((role) => (
                      <div
                        key={role.id}
                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                          selectedRole === role.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedRole(role.id as 'student' | 'teacher' | 'admin')}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center text-white`}>
                            {role.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{role.title}</div>
                            <div className="text-sm text-gray-500">{role.description}</div>
                          </div>
                          {selectedRole === role.id && (
                            <Badge className="bg-blue-500">Selected</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  Sign In
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
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
