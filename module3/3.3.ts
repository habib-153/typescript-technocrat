{
    // type guard

    // type of --> type guard
    const add =(param1: string| number, param2: string | number):string | number =>{
        // return param1+param2
        if  (typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 +param2
        } else{
            return param1.toString() + param2.toString()
        }
    } 

    // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin",
  };

  getUser(adminUser);

}