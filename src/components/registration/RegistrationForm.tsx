
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { User, Users } from "lucide-react";

const PlayerRegistrationForm = () => {
  const [playerPhoto, setPlayerPhoto] = useState<string | null>(null);
  const [passportPhoto, setPassportPhoto] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      name: "",
      nationality: "",
      birthdate: "",
      academy: ""
    }
  });
  
  const onSubmit = (data: any) => {
    console.log("Player registration data:", data);
    toast.success("Player registered successfully!");
    form.reset();
    setPlayerPhoto(null);
    setPassportPhoto(null);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:order-2">
            <div className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">الاسم الثلاثي للاعب</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">الجنسية</FormLabel>
                    <FormControl>
                      <Input placeholder="Nationality" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="birthdate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">المواليد</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="academy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">الأكاديمية</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Academy" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="academy1">Academy 1</SelectItem>
                        <SelectItem value="academy2">Academy 2</SelectItem>
                        <SelectItem value="academy3">Academy 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <FormLabel className="rtl block mb-2">صورة جواز السفر</FormLabel>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center text-center">
                  {passportPhoto ? (
                    <img src={passportPhoto} alt="Passport" className="h-full object-contain" />
                  ) : (
                    <>
                      <p className="text-sm text-gray-500">Upload passport photo</p>
                      <Input 
                        type="file" 
                        className="mt-2" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                              setPassportPhoto(e.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
              <div>
                <FormLabel className="rtl block mb-2">الصورة الشخصية</FormLabel>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center text-center">
                  {playerPhoto ? (
                    <img src={playerPhoto} alt="Player" className="h-full object-contain" />
                  ) : (
                    <>
                      <p className="text-sm text-gray-500">Upload player photo</p>
                      <Input 
                        type="file" 
                        className="mt-2" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                              setPlayerPhoto(e.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-tournament-blue">Register Player</Button>
      </form>
    </Form>
  );
};

const StaffRegistrationForm = () => {
  const [staffPhoto, setStaffPhoto] = useState<string | null>(null);
  const [passportPhoto, setPassportPhoto] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      name: "",
      academy: "",
      role: ""
    }
  });
  
  const onSubmit = (data: any) => {
    console.log("Staff registration data:", data);
    toast.success("Staff member registered successfully!");
    form.reset();
    setStaffPhoto(null);
    setPassportPhoto(null);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:order-2">
            <div className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">الاسم الثلاثي</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="academy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">الأكاديمية</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Academy" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="academy1">Academy 1</SelectItem>
                        <SelectItem value="academy2">Academy 2</SelectItem>
                        <SelectItem value="academy3">Academy 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="rtl">الصفة</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="coach">Coach</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="physio">Physiotherapist</SelectItem>
                        <SelectItem value="admin">Administrative Staff</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <FormLabel className="rtl block mb-2">صورة جواز السفر</FormLabel>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center text-center">
                  {passportPhoto ? (
                    <img src={passportPhoto} alt="Passport" className="h-full object-contain" />
                  ) : (
                    <>
                      <p className="text-sm text-gray-500">Upload passport photo</p>
                      <Input 
                        type="file" 
                        className="mt-2" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                              setPassportPhoto(e.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
              <div>
                <FormLabel className="rtl block mb-2">الصورة الشخصية</FormLabel>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center text-center">
                  {staffPhoto ? (
                    <img src={staffPhoto} alt="Staff" className="h-full object-contain" />
                  ) : (
                    <>
                      <p className="text-sm text-gray-500">Upload staff photo</p>
                      <Input 
                        type="file" 
                        className="mt-2" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                              setStaffPhoto(e.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-tournament-blue">Register Staff</Button>
      </form>
    </Form>
  );
};

const RegistrationForm = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center rtl">تسجيل اللاعبين والجهاز الفني والإداري</CardTitle>
        <p className="text-center text-gray-600">Player & Staff Registration</p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="player" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="player" className="flex items-center gap-2"><Users size={16} /> Players</TabsTrigger>
            <TabsTrigger value="staff" className="flex items-center gap-2"><User size={16} /> Staff</TabsTrigger>
          </TabsList>
          <TabsContent value="player">
            <PlayerRegistrationForm />
          </TabsContent>
          <TabsContent value="staff">
            <StaffRegistrationForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
