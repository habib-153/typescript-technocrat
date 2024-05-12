{
  // utility types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;

  // omit
  type contactInfo = Omit<Person, "name" | "age">;

  // required
  type requiredInfo = Required<Person>;

  // partial
  type partialInfo = Partial<Person>;

  // ReadOnly
  type PersonReadOnly = Readonly<Person>;
  const person2: PersonReadOnly = {
    name: "Mr X",
    age: 40,
    contactNo: "0111111",
  };

  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  //   type MyObj = Record<string, number | string>;
  type MyObj = Record<string, unknown>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 6,
  };
}
