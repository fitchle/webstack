CREATE MIGRATION m16exft7cjr33fconet5ohiepmt6njbd4oqd7xodcrihgbcnvdjthq
    ONTO m1eyguovjnuvvepgjdh5rhhwm54obpo7no456jx6meod6rgm5bofoq
{
  CREATE TYPE default::TestObj {
      CREATE REQUIRED PROPERTY t: std::str;
  };
};
