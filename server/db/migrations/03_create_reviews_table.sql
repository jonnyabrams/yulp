CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users (id),
  username VARCHAR NOT NULL REFERENCES users (username),
  restaurant_id BIGINT NOT NULL REFERENCES restaurants (id),
  content TEXT NOT NULL,
  rating INT NOT NULL check(rating >=1 and rating <=5)
);