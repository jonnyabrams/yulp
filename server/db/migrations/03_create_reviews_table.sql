CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id BIGSERIAL NOT NULL REFERENCES users (id),
  restaurant_id BIGSERIAL NOT NULL REFERENCES restaurants (id),
  content TEXT NOT NULL,
  rating INT check(rating >=1 and rating <=5)
);