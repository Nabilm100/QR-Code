import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Connect to Redis
async function run() {
  try {
    // Connect the Redis client
    await client.connect();
    console.log('Connected to Redis...');

    // Set a key in Redis
    await client.set('my_key', 'Hello Redis');
    await client.SADD('members',['adam','lara']);
    console.log('Set: OK');


    await client.hSet('user:1000', {
      name: 'Alice',
     
    });

    await client.hSet('user:1000', {
      
      age: '30',
     
    });
    await client.hSet('user:1000', {
      
      email: 'alice@example.com'
    });
    console.log('User data set in hash.');
  
    // 2. Get a specific field
    const name = await client.hGet('user:1000', 'name');
    console.log('Name:', name);
  
    // 3. Get multiple fields
    const userFields = await client.hmGet('user:1000', ['name', 'email']);
    console.log('Name and Email:', userFields);
  
    // 4. Get all fields and values
    const allUserData = await client.hGetAll('user:1000');
    console.log('All user data:', allUserData);
  

    // Get the value of the key
    const value = await client.get('my_key');
    console.log('Get:', value);
  } catch (err) {
    console.error('Redis error:', err);
  } finally {
    // Close the Redis connection
    await client.quit();
  }
}

// Run the Redis commands
run();
