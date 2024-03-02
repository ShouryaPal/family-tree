export const familyData = {
  persons: [
    {
      name: "grandad",
      gender: "Male",
      is_alive: false,
    },
    {
      name: "grandma",
      gender: "Female",
      is_alive: true,
    },
    {
      name: "dad",
      gender: "Male",
      is_alive: true,
    },
    {
      name: "dad's sister",
      gender: "Female",
      is_alive: false,
    },
    {
      name: "dad's sister husband",
      gender: "Male",
      is_alive: true,
    },
    {
      name: "dad's sister son",
      gender: "Male",
      is_alive: true,
    }
  ],
  relations: [
    {
      src: "grandad",
      dest: "grandma",
      relation: "Husband Of",
    },
    {
      src: "grandad",
      dest: "dad",
      relation: "Father Of",
    },
    {
      src: "grandad",
      dest: "dad's sister",
      relation: "Father Of",
    },
    {
      src: "dad's sister",
      dest: "dad's sister husband",
      relation: "Wife Of",
    },
    {
      src: "dad's sister",
      dest: "dad's sister son",
      relation: "Mother Of",
    }
  ],
};
