import app from './app';
import prisma from './API/client';
import StartReport from 'BackEnd/NewReport';
// import auth from './API/routes/auth'
import { router as authRouter} from './API/routes/auth'

// auth(app);
app.use(authRouter);


app.listen(8080, () => {
    console.log(`App listening on port http://localhost:8080/`)
});

// async function main() {
//   console.log('Database connected');
// }

// main()
//   .catch((e) => {
//     throw new Error(`Failed to initialize database: ${e}`);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

console.log("basile tg gros con")
