CREATE MIGRATION m1fdz4vgnasvld56k6sxnnes65rtmuf2xiqfrbs4al7akrrsz5klla
    ONTO m1hxxflcig6zk3fhr3tb4h7jsqegidilpzvt4xqnw3enrk7qmamnsq
{
  DROP TYPE default::Movie;
  ALTER TYPE default::Person RENAME TO default::FitchleNode;
  ALTER TYPE default::FitchleNode {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
