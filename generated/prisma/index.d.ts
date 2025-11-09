
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Agents
 * 
 */
export type Agents = $Result.DefaultSelection<Prisma.$AgentsPayload>
/**
 * Model StudentAgentAssignment
 * 
 */
export type StudentAgentAssignment = $Result.DefaultSelection<Prisma.$StudentAgentAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agents`: Exposes CRUD operations for the **Agents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agents.findMany()
    * ```
    */
  get agents(): Prisma.AgentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAgentAssignment`: Exposes CRUD operations for the **StudentAgentAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAgentAssignments
    * const studentAgentAssignments = await prisma.studentAgentAssignment.findMany()
    * ```
    */
  get studentAgentAssignment(): Prisma.StudentAgentAssignmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Agents: 'Agents',
    StudentAgentAssignment: 'StudentAgentAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "agents" | "studentAgentAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Agents: {
        payload: Prisma.$AgentsPayload<ExtArgs>
        fields: Prisma.AgentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          findFirst: {
            args: Prisma.AgentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          findMany: {
            args: Prisma.AgentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>[]
          }
          create: {
            args: Prisma.AgentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          createMany: {
            args: Prisma.AgentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>[]
          }
          delete: {
            args: Prisma.AgentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          update: {
            args: Prisma.AgentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          deleteMany: {
            args: Prisma.AgentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>[]
          }
          upsert: {
            args: Prisma.AgentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          aggregate: {
            args: Prisma.AgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgents>
          }
          groupBy: {
            args: Prisma.AgentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentsCountArgs<ExtArgs>
            result: $Utils.Optional<AgentsCountAggregateOutputType> | number
          }
        }
      }
      StudentAgentAssignment: {
        payload: Prisma.$StudentAgentAssignmentPayload<ExtArgs>
        fields: Prisma.StudentAgentAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAgentAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAgentAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>
          }
          findFirst: {
            args: Prisma.StudentAgentAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAgentAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>
          }
          findMany: {
            args: Prisma.StudentAgentAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>[]
          }
          create: {
            args: Prisma.StudentAgentAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>
          }
          createMany: {
            args: Prisma.StudentAgentAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAgentAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>[]
          }
          delete: {
            args: Prisma.StudentAgentAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>
          }
          update: {
            args: Prisma.StudentAgentAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.StudentAgentAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAgentAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAgentAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.StudentAgentAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAgentAssignmentPayload>
          }
          aggregate: {
            args: Prisma.StudentAgentAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAgentAssignment>
          }
          groupBy: {
            args: Prisma.StudentAgentAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAgentAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAgentAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAgentAssignmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    agents?: AgentsOmit
    studentAgentAssignment?: StudentAgentAssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdAgents: number
    assignedStudents: number
    assignedByTeacher: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdAgents?: boolean | UserCountOutputTypeCountCreatedAgentsArgs
    assignedStudents?: boolean | UserCountOutputTypeCountAssignedStudentsArgs
    assignedByTeacher?: boolean | UserCountOutputTypeCountAssignedByTeacherArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAgentAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedByTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAgentAssignmentWhereInput
  }


  /**
   * Count Type AgentsCountOutputType
   */

  export type AgentsCountOutputType = {
    studentAssignments: number
  }

  export type AgentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentAssignments?: boolean | AgentsCountOutputTypeCountStudentAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * AgentsCountOutputType without action
   */
  export type AgentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentsCountOutputType
     */
    select?: AgentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentsCountOutputType without action
   */
  export type AgentsCountOutputTypeCountStudentAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAgentAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAgents?: boolean | User$createdAgentsArgs<ExtArgs>
    assignedStudents?: boolean | User$assignedStudentsArgs<ExtArgs>
    assignedByTeacher?: boolean | User$assignedByTeacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdAgents?: boolean | User$createdAgentsArgs<ExtArgs>
    assignedStudents?: boolean | User$assignedStudentsArgs<ExtArgs>
    assignedByTeacher?: boolean | User$assignedByTeacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdAgents: Prisma.$AgentsPayload<ExtArgs>[]
      assignedStudents: Prisma.$StudentAgentAssignmentPayload<ExtArgs>[]
      assignedByTeacher: Prisma.$StudentAgentAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdAgents<T extends User$createdAgentsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdAgentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedStudents<T extends User$assignedStudentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedByTeacher<T extends User$assignedByTeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedByTeacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdAgents
   */
  export type User$createdAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    where?: AgentsWhereInput
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    cursor?: AgentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * User.assignedStudents
   */
  export type User$assignedStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    where?: StudentAgentAssignmentWhereInput
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    cursor?: StudentAgentAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAgentAssignmentScalarFieldEnum | StudentAgentAssignmentScalarFieldEnum[]
  }

  /**
   * User.assignedByTeacher
   */
  export type User$assignedByTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    where?: StudentAgentAssignmentWhereInput
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    cursor?: StudentAgentAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAgentAssignmentScalarFieldEnum | StudentAgentAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Agents
   */

  export type AggregateAgents = {
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  export type AgentsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type AgentsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type AgentsMinAggregateOutputType = {
    id: number | null
    agent_id: string | null
    created_by: number | null
    is_public: boolean | null
  }

  export type AgentsMaxAggregateOutputType = {
    id: number | null
    agent_id: string | null
    created_by: number | null
    is_public: boolean | null
  }

  export type AgentsCountAggregateOutputType = {
    id: number
    agent_id: number
    created_by: number
    is_public: number
    _all: number
  }


  export type AgentsAvgAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type AgentsSumAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type AgentsMinAggregateInputType = {
    id?: true
    agent_id?: true
    created_by?: true
    is_public?: true
  }

  export type AgentsMaxAggregateInputType = {
    id?: true
    agent_id?: true
    created_by?: true
    is_public?: true
  }

  export type AgentsCountAggregateInputType = {
    id?: true
    agent_id?: true
    created_by?: true
    is_public?: true
    _all?: true
  }

  export type AgentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to aggregate.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentsMaxAggregateInputType
  }

  export type GetAgentsAggregateType<T extends AgentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgents[P]>
      : GetScalarType<T[P], AggregateAgents[P]>
  }




  export type AgentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentsWhereInput
    orderBy?: AgentsOrderByWithAggregationInput | AgentsOrderByWithAggregationInput[]
    by: AgentsScalarFieldEnum[] | AgentsScalarFieldEnum
    having?: AgentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentsCountAggregateInputType | true
    _avg?: AgentsAvgAggregateInputType
    _sum?: AgentsSumAggregateInputType
    _min?: AgentsMinAggregateInputType
    _max?: AgentsMaxAggregateInputType
  }

  export type AgentsGroupByOutputType = {
    id: number
    agent_id: string
    created_by: number
    is_public: boolean
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  type GetAgentsGroupByPayload<T extends AgentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentsGroupByOutputType[P]>
            : GetScalarType<T[P], AgentsGroupByOutputType[P]>
        }
      >
    >


  export type AgentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_id?: boolean
    created_by?: boolean
    is_public?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    studentAssignments?: boolean | Agents$studentAssignmentsArgs<ExtArgs>
    _count?: boolean | AgentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agents"]>

  export type AgentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_id?: boolean
    created_by?: boolean
    is_public?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agents"]>

  export type AgentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_id?: boolean
    created_by?: boolean
    is_public?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agents"]>

  export type AgentsSelectScalar = {
    id?: boolean
    agent_id?: boolean
    created_by?: boolean
    is_public?: boolean
  }

  export type AgentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agent_id" | "created_by" | "is_public", ExtArgs["result"]["agents"]>
  export type AgentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    studentAssignments?: boolean | Agents$studentAssignmentsArgs<ExtArgs>
    _count?: boolean | AgentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agents"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      studentAssignments: Prisma.$StudentAgentAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agent_id: string
      created_by: number
      is_public: boolean
    }, ExtArgs["result"]["agents"]>
    composites: {}
  }

  type AgentsGetPayload<S extends boolean | null | undefined | AgentsDefaultArgs> = $Result.GetResult<Prisma.$AgentsPayload, S>

  type AgentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentsCountAggregateInputType | true
    }

  export interface AgentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agents'], meta: { name: 'Agents' } }
    /**
     * Find zero or one Agents that matches the filter.
     * @param {AgentsFindUniqueArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentsFindUniqueArgs>(args: SelectSubset<T, AgentsFindUniqueArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentsFindUniqueOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsFindFirstArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentsFindFirstArgs>(args?: SelectSubset<T, AgentsFindFirstArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsFindFirstOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agents.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentsWithIdOnly = await prisma.agents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentsFindManyArgs>(args?: SelectSubset<T, AgentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agents.
     * @param {AgentsCreateArgs} args - Arguments to create a Agents.
     * @example
     * // Create one Agents
     * const Agents = await prisma.agents.create({
     *   data: {
     *     // ... data to create a Agents
     *   }
     * })
     * 
     */
    create<T extends AgentsCreateArgs>(args: SelectSubset<T, AgentsCreateArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentsCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agents = await prisma.agents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentsCreateManyArgs>(args?: SelectSubset<T, AgentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentsCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agents = await prisma.agents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentsWithIdOnly = await prisma.agents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agents.
     * @param {AgentsDeleteArgs} args - Arguments to delete one Agents.
     * @example
     * // Delete one Agents
     * const Agents = await prisma.agents.delete({
     *   where: {
     *     // ... filter to delete one Agents
     *   }
     * })
     * 
     */
    delete<T extends AgentsDeleteArgs>(args: SelectSubset<T, AgentsDeleteArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agents.
     * @param {AgentsUpdateArgs} args - Arguments to update one Agents.
     * @example
     * // Update one Agents
     * const agents = await prisma.agents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentsUpdateArgs>(args: SelectSubset<T, AgentsUpdateArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentsDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentsDeleteManyArgs>(args?: SelectSubset<T, AgentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agents = await prisma.agents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentsUpdateManyArgs>(args: SelectSubset<T, AgentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentsUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agents = await prisma.agents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentsWithIdOnly = await prisma.agents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agents.
     * @param {AgentsUpsertArgs} args - Arguments to update or create a Agents.
     * @example
     * // Update or create a Agents
     * const agents = await prisma.agents.upsert({
     *   create: {
     *     // ... data to create a Agents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agents we want to update
     *   }
     * })
     */
    upsert<T extends AgentsUpsertArgs>(args: SelectSubset<T, AgentsUpsertArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agents.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentsCountArgs>(
      args?: Subset<T, AgentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentsAggregateArgs>(args: Subset<T, AgentsAggregateArgs>): Prisma.PrismaPromise<GetAgentsAggregateType<T>>

    /**
     * Group by Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentsGroupByArgs['orderBy'] }
        : { orderBy?: AgentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agents model
   */
  readonly fields: AgentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentAssignments<T extends Agents$studentAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Agents$studentAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agents model
   */
  interface AgentsFieldRefs {
    readonly id: FieldRef<"Agents", 'Int'>
    readonly agent_id: FieldRef<"Agents", 'String'>
    readonly created_by: FieldRef<"Agents", 'Int'>
    readonly is_public: FieldRef<"Agents", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Agents findUnique
   */
  export type AgentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents findUniqueOrThrow
   */
  export type AgentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents findFirst
   */
  export type AgentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * Agents findFirstOrThrow
   */
  export type AgentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * Agents findMany
   */
  export type AgentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * Agents create
   */
  export type AgentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Agents.
     */
    data: XOR<AgentsCreateInput, AgentsUncheckedCreateInput>
  }

  /**
   * Agents createMany
   */
  export type AgentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentsCreateManyInput | AgentsCreateManyInput[]
  }

  /**
   * Agents createManyAndReturn
   */
  export type AgentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentsCreateManyInput | AgentsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agents update
   */
  export type AgentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Agents.
     */
    data: XOR<AgentsUpdateInput, AgentsUncheckedUpdateInput>
    /**
     * Choose, which Agents to update.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents updateMany
   */
  export type AgentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentsUpdateManyMutationInput, AgentsUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentsWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agents updateManyAndReturn
   */
  export type AgentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentsUpdateManyMutationInput, AgentsUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentsWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agents upsert
   */
  export type AgentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Agents to update in case it exists.
     */
    where: AgentsWhereUniqueInput
    /**
     * In case the Agents found by the `where` argument doesn't exist, create a new Agents with this data.
     */
    create: XOR<AgentsCreateInput, AgentsUncheckedCreateInput>
    /**
     * In case the Agents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentsUpdateInput, AgentsUncheckedUpdateInput>
  }

  /**
   * Agents delete
   */
  export type AgentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter which Agents to delete.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents deleteMany
   */
  export type AgentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentsWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agents.studentAssignments
   */
  export type Agents$studentAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    where?: StudentAgentAssignmentWhereInput
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    cursor?: StudentAgentAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAgentAssignmentScalarFieldEnum | StudentAgentAssignmentScalarFieldEnum[]
  }

  /**
   * Agents without action
   */
  export type AgentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
  }


  /**
   * Model StudentAgentAssignment
   */

  export type AggregateStudentAgentAssignment = {
    _count: StudentAgentAssignmentCountAggregateOutputType | null
    _avg: StudentAgentAssignmentAvgAggregateOutputType | null
    _sum: StudentAgentAssignmentSumAggregateOutputType | null
    _min: StudentAgentAssignmentMinAggregateOutputType | null
    _max: StudentAgentAssignmentMaxAggregateOutputType | null
  }

  export type StudentAgentAssignmentAvgAggregateOutputType = {
    id: number | null
    agent_id: number | null
    student_id: number | null
    assigned_by: number | null
  }

  export type StudentAgentAssignmentSumAggregateOutputType = {
    id: number | null
    agent_id: number | null
    student_id: number | null
    assigned_by: number | null
  }

  export type StudentAgentAssignmentMinAggregateOutputType = {
    id: number | null
    agent_id: number | null
    student_id: number | null
    assigned_by: number | null
  }

  export type StudentAgentAssignmentMaxAggregateOutputType = {
    id: number | null
    agent_id: number | null
    student_id: number | null
    assigned_by: number | null
  }

  export type StudentAgentAssignmentCountAggregateOutputType = {
    id: number
    agent_id: number
    student_id: number
    assigned_by: number
    _all: number
  }


  export type StudentAgentAssignmentAvgAggregateInputType = {
    id?: true
    agent_id?: true
    student_id?: true
    assigned_by?: true
  }

  export type StudentAgentAssignmentSumAggregateInputType = {
    id?: true
    agent_id?: true
    student_id?: true
    assigned_by?: true
  }

  export type StudentAgentAssignmentMinAggregateInputType = {
    id?: true
    agent_id?: true
    student_id?: true
    assigned_by?: true
  }

  export type StudentAgentAssignmentMaxAggregateInputType = {
    id?: true
    agent_id?: true
    student_id?: true
    assigned_by?: true
  }

  export type StudentAgentAssignmentCountAggregateInputType = {
    id?: true
    agent_id?: true
    student_id?: true
    assigned_by?: true
    _all?: true
  }

  export type StudentAgentAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAgentAssignment to aggregate.
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAgentAssignments to fetch.
     */
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAgentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAgentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAgentAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAgentAssignments
    **/
    _count?: true | StudentAgentAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAgentAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAgentAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAgentAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAgentAssignmentMaxAggregateInputType
  }

  export type GetStudentAgentAssignmentAggregateType<T extends StudentAgentAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAgentAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAgentAssignment[P]>
      : GetScalarType<T[P], AggregateStudentAgentAssignment[P]>
  }




  export type StudentAgentAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAgentAssignmentWhereInput
    orderBy?: StudentAgentAssignmentOrderByWithAggregationInput | StudentAgentAssignmentOrderByWithAggregationInput[]
    by: StudentAgentAssignmentScalarFieldEnum[] | StudentAgentAssignmentScalarFieldEnum
    having?: StudentAgentAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAgentAssignmentCountAggregateInputType | true
    _avg?: StudentAgentAssignmentAvgAggregateInputType
    _sum?: StudentAgentAssignmentSumAggregateInputType
    _min?: StudentAgentAssignmentMinAggregateInputType
    _max?: StudentAgentAssignmentMaxAggregateInputType
  }

  export type StudentAgentAssignmentGroupByOutputType = {
    id: number
    agent_id: number
    student_id: number
    assigned_by: number
    _count: StudentAgentAssignmentCountAggregateOutputType | null
    _avg: StudentAgentAssignmentAvgAggregateOutputType | null
    _sum: StudentAgentAssignmentSumAggregateOutputType | null
    _min: StudentAgentAssignmentMinAggregateOutputType | null
    _max: StudentAgentAssignmentMaxAggregateOutputType | null
  }

  type GetStudentAgentAssignmentGroupByPayload<T extends StudentAgentAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAgentAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAgentAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAgentAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAgentAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type StudentAgentAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_id?: boolean
    student_id?: boolean
    assigned_by?: boolean
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAgentAssignment"]>

  export type StudentAgentAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_id?: boolean
    student_id?: boolean
    assigned_by?: boolean
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAgentAssignment"]>

  export type StudentAgentAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_id?: boolean
    student_id?: boolean
    assigned_by?: boolean
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAgentAssignment"]>

  export type StudentAgentAssignmentSelectScalar = {
    id?: boolean
    agent_id?: boolean
    student_id?: boolean
    assigned_by?: boolean
  }

  export type StudentAgentAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agent_id" | "student_id" | "assigned_by", ExtArgs["result"]["studentAgentAssignment"]>
  export type StudentAgentAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentAgentAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentAgentAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentAgentAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAgentAssignment"
    objects: {
      agent: Prisma.$AgentsPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agent_id: number
      student_id: number
      assigned_by: number
    }, ExtArgs["result"]["studentAgentAssignment"]>
    composites: {}
  }

  type StudentAgentAssignmentGetPayload<S extends boolean | null | undefined | StudentAgentAssignmentDefaultArgs> = $Result.GetResult<Prisma.$StudentAgentAssignmentPayload, S>

  type StudentAgentAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAgentAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAgentAssignmentCountAggregateInputType | true
    }

  export interface StudentAgentAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAgentAssignment'], meta: { name: 'StudentAgentAssignment' } }
    /**
     * Find zero or one StudentAgentAssignment that matches the filter.
     * @param {StudentAgentAssignmentFindUniqueArgs} args - Arguments to find a StudentAgentAssignment
     * @example
     * // Get one StudentAgentAssignment
     * const studentAgentAssignment = await prisma.studentAgentAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAgentAssignmentFindUniqueArgs>(args: SelectSubset<T, StudentAgentAssignmentFindUniqueArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAgentAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAgentAssignmentFindUniqueOrThrowArgs} args - Arguments to find a StudentAgentAssignment
     * @example
     * // Get one StudentAgentAssignment
     * const studentAgentAssignment = await prisma.studentAgentAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAgentAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAgentAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAgentAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentFindFirstArgs} args - Arguments to find a StudentAgentAssignment
     * @example
     * // Get one StudentAgentAssignment
     * const studentAgentAssignment = await prisma.studentAgentAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAgentAssignmentFindFirstArgs>(args?: SelectSubset<T, StudentAgentAssignmentFindFirstArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAgentAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentFindFirstOrThrowArgs} args - Arguments to find a StudentAgentAssignment
     * @example
     * // Get one StudentAgentAssignment
     * const studentAgentAssignment = await prisma.studentAgentAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAgentAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAgentAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAgentAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAgentAssignments
     * const studentAgentAssignments = await prisma.studentAgentAssignment.findMany()
     * 
     * // Get first 10 StudentAgentAssignments
     * const studentAgentAssignments = await prisma.studentAgentAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAgentAssignmentWithIdOnly = await prisma.studentAgentAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAgentAssignmentFindManyArgs>(args?: SelectSubset<T, StudentAgentAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAgentAssignment.
     * @param {StudentAgentAssignmentCreateArgs} args - Arguments to create a StudentAgentAssignment.
     * @example
     * // Create one StudentAgentAssignment
     * const StudentAgentAssignment = await prisma.studentAgentAssignment.create({
     *   data: {
     *     // ... data to create a StudentAgentAssignment
     *   }
     * })
     * 
     */
    create<T extends StudentAgentAssignmentCreateArgs>(args: SelectSubset<T, StudentAgentAssignmentCreateArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAgentAssignments.
     * @param {StudentAgentAssignmentCreateManyArgs} args - Arguments to create many StudentAgentAssignments.
     * @example
     * // Create many StudentAgentAssignments
     * const studentAgentAssignment = await prisma.studentAgentAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAgentAssignmentCreateManyArgs>(args?: SelectSubset<T, StudentAgentAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAgentAssignments and returns the data saved in the database.
     * @param {StudentAgentAssignmentCreateManyAndReturnArgs} args - Arguments to create many StudentAgentAssignments.
     * @example
     * // Create many StudentAgentAssignments
     * const studentAgentAssignment = await prisma.studentAgentAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAgentAssignments and only return the `id`
     * const studentAgentAssignmentWithIdOnly = await prisma.studentAgentAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAgentAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAgentAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAgentAssignment.
     * @param {StudentAgentAssignmentDeleteArgs} args - Arguments to delete one StudentAgentAssignment.
     * @example
     * // Delete one StudentAgentAssignment
     * const StudentAgentAssignment = await prisma.studentAgentAssignment.delete({
     *   where: {
     *     // ... filter to delete one StudentAgentAssignment
     *   }
     * })
     * 
     */
    delete<T extends StudentAgentAssignmentDeleteArgs>(args: SelectSubset<T, StudentAgentAssignmentDeleteArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAgentAssignment.
     * @param {StudentAgentAssignmentUpdateArgs} args - Arguments to update one StudentAgentAssignment.
     * @example
     * // Update one StudentAgentAssignment
     * const studentAgentAssignment = await prisma.studentAgentAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAgentAssignmentUpdateArgs>(args: SelectSubset<T, StudentAgentAssignmentUpdateArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAgentAssignments.
     * @param {StudentAgentAssignmentDeleteManyArgs} args - Arguments to filter StudentAgentAssignments to delete.
     * @example
     * // Delete a few StudentAgentAssignments
     * const { count } = await prisma.studentAgentAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAgentAssignmentDeleteManyArgs>(args?: SelectSubset<T, StudentAgentAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAgentAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAgentAssignments
     * const studentAgentAssignment = await prisma.studentAgentAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAgentAssignmentUpdateManyArgs>(args: SelectSubset<T, StudentAgentAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAgentAssignments and returns the data updated in the database.
     * @param {StudentAgentAssignmentUpdateManyAndReturnArgs} args - Arguments to update many StudentAgentAssignments.
     * @example
     * // Update many StudentAgentAssignments
     * const studentAgentAssignment = await prisma.studentAgentAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAgentAssignments and only return the `id`
     * const studentAgentAssignmentWithIdOnly = await prisma.studentAgentAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentAgentAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAgentAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAgentAssignment.
     * @param {StudentAgentAssignmentUpsertArgs} args - Arguments to update or create a StudentAgentAssignment.
     * @example
     * // Update or create a StudentAgentAssignment
     * const studentAgentAssignment = await prisma.studentAgentAssignment.upsert({
     *   create: {
     *     // ... data to create a StudentAgentAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAgentAssignment we want to update
     *   }
     * })
     */
    upsert<T extends StudentAgentAssignmentUpsertArgs>(args: SelectSubset<T, StudentAgentAssignmentUpsertArgs<ExtArgs>>): Prisma__StudentAgentAssignmentClient<$Result.GetResult<Prisma.$StudentAgentAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAgentAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentCountArgs} args - Arguments to filter StudentAgentAssignments to count.
     * @example
     * // Count the number of StudentAgentAssignments
     * const count = await prisma.studentAgentAssignment.count({
     *   where: {
     *     // ... the filter for the StudentAgentAssignments we want to count
     *   }
     * })
    **/
    count<T extends StudentAgentAssignmentCountArgs>(
      args?: Subset<T, StudentAgentAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAgentAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAgentAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAgentAssignmentAggregateArgs>(args: Subset<T, StudentAgentAssignmentAggregateArgs>): Prisma.PrismaPromise<GetStudentAgentAssignmentAggregateType<T>>

    /**
     * Group by StudentAgentAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAgentAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentAgentAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAgentAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: StudentAgentAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentAgentAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAgentAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAgentAssignment model
   */
  readonly fields: StudentAgentAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAgentAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAgentAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentsDefaultArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentAgentAssignment model
   */
  interface StudentAgentAssignmentFieldRefs {
    readonly id: FieldRef<"StudentAgentAssignment", 'Int'>
    readonly agent_id: FieldRef<"StudentAgentAssignment", 'Int'>
    readonly student_id: FieldRef<"StudentAgentAssignment", 'Int'>
    readonly assigned_by: FieldRef<"StudentAgentAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentAgentAssignment findUnique
   */
  export type StudentAgentAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StudentAgentAssignment to fetch.
     */
    where: StudentAgentAssignmentWhereUniqueInput
  }

  /**
   * StudentAgentAssignment findUniqueOrThrow
   */
  export type StudentAgentAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StudentAgentAssignment to fetch.
     */
    where: StudentAgentAssignmentWhereUniqueInput
  }

  /**
   * StudentAgentAssignment findFirst
   */
  export type StudentAgentAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StudentAgentAssignment to fetch.
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAgentAssignments to fetch.
     */
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAgentAssignments.
     */
    cursor?: StudentAgentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAgentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAgentAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAgentAssignments.
     */
    distinct?: StudentAgentAssignmentScalarFieldEnum | StudentAgentAssignmentScalarFieldEnum[]
  }

  /**
   * StudentAgentAssignment findFirstOrThrow
   */
  export type StudentAgentAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StudentAgentAssignment to fetch.
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAgentAssignments to fetch.
     */
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAgentAssignments.
     */
    cursor?: StudentAgentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAgentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAgentAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAgentAssignments.
     */
    distinct?: StudentAgentAssignmentScalarFieldEnum | StudentAgentAssignmentScalarFieldEnum[]
  }

  /**
   * StudentAgentAssignment findMany
   */
  export type StudentAgentAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StudentAgentAssignments to fetch.
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAgentAssignments to fetch.
     */
    orderBy?: StudentAgentAssignmentOrderByWithRelationInput | StudentAgentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAgentAssignments.
     */
    cursor?: StudentAgentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAgentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAgentAssignments.
     */
    skip?: number
    distinct?: StudentAgentAssignmentScalarFieldEnum | StudentAgentAssignmentScalarFieldEnum[]
  }

  /**
   * StudentAgentAssignment create
   */
  export type StudentAgentAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAgentAssignment.
     */
    data: XOR<StudentAgentAssignmentCreateInput, StudentAgentAssignmentUncheckedCreateInput>
  }

  /**
   * StudentAgentAssignment createMany
   */
  export type StudentAgentAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAgentAssignments.
     */
    data: StudentAgentAssignmentCreateManyInput | StudentAgentAssignmentCreateManyInput[]
  }

  /**
   * StudentAgentAssignment createManyAndReturn
   */
  export type StudentAgentAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAgentAssignments.
     */
    data: StudentAgentAssignmentCreateManyInput | StudentAgentAssignmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAgentAssignment update
   */
  export type StudentAgentAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAgentAssignment.
     */
    data: XOR<StudentAgentAssignmentUpdateInput, StudentAgentAssignmentUncheckedUpdateInput>
    /**
     * Choose, which StudentAgentAssignment to update.
     */
    where: StudentAgentAssignmentWhereUniqueInput
  }

  /**
   * StudentAgentAssignment updateMany
   */
  export type StudentAgentAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAgentAssignments.
     */
    data: XOR<StudentAgentAssignmentUpdateManyMutationInput, StudentAgentAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which StudentAgentAssignments to update
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * Limit how many StudentAgentAssignments to update.
     */
    limit?: number
  }

  /**
   * StudentAgentAssignment updateManyAndReturn
   */
  export type StudentAgentAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update StudentAgentAssignments.
     */
    data: XOR<StudentAgentAssignmentUpdateManyMutationInput, StudentAgentAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which StudentAgentAssignments to update
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * Limit how many StudentAgentAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAgentAssignment upsert
   */
  export type StudentAgentAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAgentAssignment to update in case it exists.
     */
    where: StudentAgentAssignmentWhereUniqueInput
    /**
     * In case the StudentAgentAssignment found by the `where` argument doesn't exist, create a new StudentAgentAssignment with this data.
     */
    create: XOR<StudentAgentAssignmentCreateInput, StudentAgentAssignmentUncheckedCreateInput>
    /**
     * In case the StudentAgentAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAgentAssignmentUpdateInput, StudentAgentAssignmentUncheckedUpdateInput>
  }

  /**
   * StudentAgentAssignment delete
   */
  export type StudentAgentAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
    /**
     * Filter which StudentAgentAssignment to delete.
     */
    where: StudentAgentAssignmentWhereUniqueInput
  }

  /**
   * StudentAgentAssignment deleteMany
   */
  export type StudentAgentAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAgentAssignments to delete
     */
    where?: StudentAgentAssignmentWhereInput
    /**
     * Limit how many StudentAgentAssignments to delete.
     */
    limit?: number
  }

  /**
   * StudentAgentAssignment without action
   */
  export type StudentAgentAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAgentAssignment
     */
    select?: StudentAgentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAgentAssignment
     */
    omit?: StudentAgentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAgentAssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AgentsScalarFieldEnum: {
    id: 'id',
    agent_id: 'agent_id',
    created_by: 'created_by',
    is_public: 'is_public'
  };

  export type AgentsScalarFieldEnum = (typeof AgentsScalarFieldEnum)[keyof typeof AgentsScalarFieldEnum]


  export const StudentAgentAssignmentScalarFieldEnum: {
    id: 'id',
    agent_id: 'agent_id',
    student_id: 'student_id',
    assigned_by: 'assigned_by'
  };

  export type StudentAgentAssignmentScalarFieldEnum = (typeof StudentAgentAssignmentScalarFieldEnum)[keyof typeof StudentAgentAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAgents?: AgentsListRelationFilter
    assignedStudents?: StudentAgentAssignmentListRelationFilter
    assignedByTeacher?: StudentAgentAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAgents?: AgentsOrderByRelationAggregateInput
    assignedStudents?: StudentAgentAssignmentOrderByRelationAggregateInput
    assignedByTeacher?: StudentAgentAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAgents?: AgentsListRelationFilter
    assignedStudents?: StudentAgentAssignmentListRelationFilter
    assignedByTeacher?: StudentAgentAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type AgentsWhereInput = {
    AND?: AgentsWhereInput | AgentsWhereInput[]
    OR?: AgentsWhereInput[]
    NOT?: AgentsWhereInput | AgentsWhereInput[]
    id?: IntFilter<"Agents"> | number
    agent_id?: StringFilter<"Agents"> | string
    created_by?: IntFilter<"Agents"> | number
    is_public?: BoolFilter<"Agents"> | boolean
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentAssignments?: StudentAgentAssignmentListRelationFilter
  }

  export type AgentsOrderByWithRelationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    creator?: UserOrderByWithRelationInput
    studentAssignments?: StudentAgentAssignmentOrderByRelationAggregateInput
  }

  export type AgentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    agent_id?: string
    AND?: AgentsWhereInput | AgentsWhereInput[]
    OR?: AgentsWhereInput[]
    NOT?: AgentsWhereInput | AgentsWhereInput[]
    created_by?: IntFilter<"Agents"> | number
    is_public?: BoolFilter<"Agents"> | boolean
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentAssignments?: StudentAgentAssignmentListRelationFilter
  }, "id" | "agent_id">

  export type AgentsOrderByWithAggregationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    _count?: AgentsCountOrderByAggregateInput
    _avg?: AgentsAvgOrderByAggregateInput
    _max?: AgentsMaxOrderByAggregateInput
    _min?: AgentsMinOrderByAggregateInput
    _sum?: AgentsSumOrderByAggregateInput
  }

  export type AgentsScalarWhereWithAggregatesInput = {
    AND?: AgentsScalarWhereWithAggregatesInput | AgentsScalarWhereWithAggregatesInput[]
    OR?: AgentsScalarWhereWithAggregatesInput[]
    NOT?: AgentsScalarWhereWithAggregatesInput | AgentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agents"> | number
    agent_id?: StringWithAggregatesFilter<"Agents"> | string
    created_by?: IntWithAggregatesFilter<"Agents"> | number
    is_public?: BoolWithAggregatesFilter<"Agents"> | boolean
  }

  export type StudentAgentAssignmentWhereInput = {
    AND?: StudentAgentAssignmentWhereInput | StudentAgentAssignmentWhereInput[]
    OR?: StudentAgentAssignmentWhereInput[]
    NOT?: StudentAgentAssignmentWhereInput | StudentAgentAssignmentWhereInput[]
    id?: IntFilter<"StudentAgentAssignment"> | number
    agent_id?: IntFilter<"StudentAgentAssignment"> | number
    student_id?: IntFilter<"StudentAgentAssignment"> | number
    assigned_by?: IntFilter<"StudentAgentAssignment"> | number
    agent?: XOR<AgentsScalarRelationFilter, AgentsWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentAgentAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
    agent?: AgentsOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type StudentAgentAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    agent_id_student_id?: StudentAgentAssignmentAgent_idStudent_idCompoundUniqueInput
    AND?: StudentAgentAssignmentWhereInput | StudentAgentAssignmentWhereInput[]
    OR?: StudentAgentAssignmentWhereInput[]
    NOT?: StudentAgentAssignmentWhereInput | StudentAgentAssignmentWhereInput[]
    agent_id?: IntFilter<"StudentAgentAssignment"> | number
    student_id?: IntFilter<"StudentAgentAssignment"> | number
    assigned_by?: IntFilter<"StudentAgentAssignment"> | number
    agent?: XOR<AgentsScalarRelationFilter, AgentsWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "agent_id_student_id">

  export type StudentAgentAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
    _count?: StudentAgentAssignmentCountOrderByAggregateInput
    _avg?: StudentAgentAssignmentAvgOrderByAggregateInput
    _max?: StudentAgentAssignmentMaxOrderByAggregateInput
    _min?: StudentAgentAssignmentMinOrderByAggregateInput
    _sum?: StudentAgentAssignmentSumOrderByAggregateInput
  }

  export type StudentAgentAssignmentScalarWhereWithAggregatesInput = {
    AND?: StudentAgentAssignmentScalarWhereWithAggregatesInput | StudentAgentAssignmentScalarWhereWithAggregatesInput[]
    OR?: StudentAgentAssignmentScalarWhereWithAggregatesInput[]
    NOT?: StudentAgentAssignmentScalarWhereWithAggregatesInput | StudentAgentAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentAgentAssignment"> | number
    agent_id?: IntWithAggregatesFilter<"StudentAgentAssignment"> | number
    student_id?: IntWithAggregatesFilter<"StudentAgentAssignment"> | number
    assigned_by?: IntWithAggregatesFilter<"StudentAgentAssignment"> | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    role: $Enums.Role
    createdAgents?: AgentsCreateNestedManyWithoutCreatorInput
    assignedStudents?: StudentAgentAssignmentCreateNestedManyWithoutStudentInput
    assignedByTeacher?: StudentAgentAssignmentCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    role: $Enums.Role
    createdAgents?: AgentsUncheckedCreateNestedManyWithoutCreatorInput
    assignedStudents?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutStudentInput
    assignedByTeacher?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAgents?: AgentsUpdateManyWithoutCreatorNestedInput
    assignedStudents?: StudentAgentAssignmentUpdateManyWithoutStudentNestedInput
    assignedByTeacher?: StudentAgentAssignmentUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAgents?: AgentsUncheckedUpdateManyWithoutCreatorNestedInput
    assignedStudents?: StudentAgentAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    assignedByTeacher?: StudentAgentAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AgentsCreateInput = {
    agent_id: string
    is_public?: boolean
    creator: UserCreateNestedOneWithoutCreatedAgentsInput
    studentAssignments?: StudentAgentAssignmentCreateNestedManyWithoutAgentInput
  }

  export type AgentsUncheckedCreateInput = {
    id?: number
    agent_id: string
    created_by: number
    is_public?: boolean
    studentAssignments?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentsUpdateInput = {
    agent_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutCreatedAgentsNestedInput
    studentAssignments?: StudentAgentAssignmentUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    studentAssignments?: StudentAgentAssignmentUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentsCreateManyInput = {
    id?: number
    agent_id: string
    created_by: number
    is_public?: boolean
  }

  export type AgentsUpdateManyMutationInput = {
    agent_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AgentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentAgentAssignmentCreateInput = {
    agent: AgentsCreateNestedOneWithoutStudentAssignmentsInput
    student: UserCreateNestedOneWithoutAssignedStudentsInput
    teacher: UserCreateNestedOneWithoutAssignedByTeacherInput
  }

  export type StudentAgentAssignmentUncheckedCreateInput = {
    id?: number
    agent_id: number
    student_id: number
    assigned_by: number
  }

  export type StudentAgentAssignmentUpdateInput = {
    agent?: AgentsUpdateOneRequiredWithoutStudentAssignmentsNestedInput
    student?: UserUpdateOneRequiredWithoutAssignedStudentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignedByTeacherNestedInput
  }

  export type StudentAgentAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    assigned_by?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAgentAssignmentCreateManyInput = {
    id?: number
    agent_id: number
    student_id: number
    assigned_by: number
  }

  export type StudentAgentAssignmentUpdateManyMutationInput = {

  }

  export type StudentAgentAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    assigned_by?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AgentsListRelationFilter = {
    every?: AgentsWhereInput
    some?: AgentsWhereInput
    none?: AgentsWhereInput
  }

  export type StudentAgentAssignmentListRelationFilter = {
    every?: StudentAgentAssignmentWhereInput
    some?: StudentAgentAssignmentWhereInput
    none?: StudentAgentAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentAgentAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AgentsCountOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
  }

  export type AgentsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type AgentsMaxOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
  }

  export type AgentsMinOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
  }

  export type AgentsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AgentsScalarRelationFilter = {
    is?: AgentsWhereInput
    isNot?: AgentsWhereInput
  }

  export type StudentAgentAssignmentAgent_idStudent_idCompoundUniqueInput = {
    agent_id: number
    student_id: number
  }

  export type StudentAgentAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
  }

  export type StudentAgentAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
  }

  export type StudentAgentAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
  }

  export type StudentAgentAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
  }

  export type StudentAgentAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    student_id?: SortOrder
    assigned_by?: SortOrder
  }

  export type AgentsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AgentsCreateWithoutCreatorInput, AgentsUncheckedCreateWithoutCreatorInput> | AgentsCreateWithoutCreatorInput[] | AgentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentsCreateOrConnectWithoutCreatorInput | AgentsCreateOrConnectWithoutCreatorInput[]
    createMany?: AgentsCreateManyCreatorInputEnvelope
    connect?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
  }

  export type StudentAgentAssignmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutStudentInput, StudentAgentAssignmentUncheckedCreateWithoutStudentInput> | StudentAgentAssignmentCreateWithoutStudentInput[] | StudentAgentAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutStudentInput | StudentAgentAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAgentAssignmentCreateManyStudentInputEnvelope
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
  }

  export type StudentAgentAssignmentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutTeacherInput, StudentAgentAssignmentUncheckedCreateWithoutTeacherInput> | StudentAgentAssignmentCreateWithoutTeacherInput[] | StudentAgentAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutTeacherInput | StudentAgentAssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: StudentAgentAssignmentCreateManyTeacherInputEnvelope
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
  }

  export type AgentsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AgentsCreateWithoutCreatorInput, AgentsUncheckedCreateWithoutCreatorInput> | AgentsCreateWithoutCreatorInput[] | AgentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentsCreateOrConnectWithoutCreatorInput | AgentsCreateOrConnectWithoutCreatorInput[]
    createMany?: AgentsCreateManyCreatorInputEnvelope
    connect?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
  }

  export type StudentAgentAssignmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutStudentInput, StudentAgentAssignmentUncheckedCreateWithoutStudentInput> | StudentAgentAssignmentCreateWithoutStudentInput[] | StudentAgentAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutStudentInput | StudentAgentAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAgentAssignmentCreateManyStudentInputEnvelope
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
  }

  export type StudentAgentAssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutTeacherInput, StudentAgentAssignmentUncheckedCreateWithoutTeacherInput> | StudentAgentAssignmentCreateWithoutTeacherInput[] | StudentAgentAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutTeacherInput | StudentAgentAssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: StudentAgentAssignmentCreateManyTeacherInputEnvelope
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AgentsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AgentsCreateWithoutCreatorInput, AgentsUncheckedCreateWithoutCreatorInput> | AgentsCreateWithoutCreatorInput[] | AgentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentsCreateOrConnectWithoutCreatorInput | AgentsCreateOrConnectWithoutCreatorInput[]
    upsert?: AgentsUpsertWithWhereUniqueWithoutCreatorInput | AgentsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AgentsCreateManyCreatorInputEnvelope
    set?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    disconnect?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    delete?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    connect?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    update?: AgentsUpdateWithWhereUniqueWithoutCreatorInput | AgentsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AgentsUpdateManyWithWhereWithoutCreatorInput | AgentsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AgentsScalarWhereInput | AgentsScalarWhereInput[]
  }

  export type StudentAgentAssignmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutStudentInput, StudentAgentAssignmentUncheckedCreateWithoutStudentInput> | StudentAgentAssignmentCreateWithoutStudentInput[] | StudentAgentAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutStudentInput | StudentAgentAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAgentAssignmentUpsertWithWhereUniqueWithoutStudentInput | StudentAgentAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAgentAssignmentCreateManyStudentInputEnvelope
    set?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    disconnect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    delete?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    update?: StudentAgentAssignmentUpdateWithWhereUniqueWithoutStudentInput | StudentAgentAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAgentAssignmentUpdateManyWithWhereWithoutStudentInput | StudentAgentAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
  }

  export type StudentAgentAssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutTeacherInput, StudentAgentAssignmentUncheckedCreateWithoutTeacherInput> | StudentAgentAssignmentCreateWithoutTeacherInput[] | StudentAgentAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutTeacherInput | StudentAgentAssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: StudentAgentAssignmentUpsertWithWhereUniqueWithoutTeacherInput | StudentAgentAssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: StudentAgentAssignmentCreateManyTeacherInputEnvelope
    set?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    disconnect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    delete?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    update?: StudentAgentAssignmentUpdateWithWhereUniqueWithoutTeacherInput | StudentAgentAssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: StudentAgentAssignmentUpdateManyWithWhereWithoutTeacherInput | StudentAgentAssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgentsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AgentsCreateWithoutCreatorInput, AgentsUncheckedCreateWithoutCreatorInput> | AgentsCreateWithoutCreatorInput[] | AgentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentsCreateOrConnectWithoutCreatorInput | AgentsCreateOrConnectWithoutCreatorInput[]
    upsert?: AgentsUpsertWithWhereUniqueWithoutCreatorInput | AgentsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AgentsCreateManyCreatorInputEnvelope
    set?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    disconnect?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    delete?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    connect?: AgentsWhereUniqueInput | AgentsWhereUniqueInput[]
    update?: AgentsUpdateWithWhereUniqueWithoutCreatorInput | AgentsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AgentsUpdateManyWithWhereWithoutCreatorInput | AgentsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AgentsScalarWhereInput | AgentsScalarWhereInput[]
  }

  export type StudentAgentAssignmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutStudentInput, StudentAgentAssignmentUncheckedCreateWithoutStudentInput> | StudentAgentAssignmentCreateWithoutStudentInput[] | StudentAgentAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutStudentInput | StudentAgentAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAgentAssignmentUpsertWithWhereUniqueWithoutStudentInput | StudentAgentAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAgentAssignmentCreateManyStudentInputEnvelope
    set?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    disconnect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    delete?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    update?: StudentAgentAssignmentUpdateWithWhereUniqueWithoutStudentInput | StudentAgentAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAgentAssignmentUpdateManyWithWhereWithoutStudentInput | StudentAgentAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
  }

  export type StudentAgentAssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutTeacherInput, StudentAgentAssignmentUncheckedCreateWithoutTeacherInput> | StudentAgentAssignmentCreateWithoutTeacherInput[] | StudentAgentAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutTeacherInput | StudentAgentAssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: StudentAgentAssignmentUpsertWithWhereUniqueWithoutTeacherInput | StudentAgentAssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: StudentAgentAssignmentCreateManyTeacherInputEnvelope
    set?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    disconnect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    delete?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    update?: StudentAgentAssignmentUpdateWithWhereUniqueWithoutTeacherInput | StudentAgentAssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: StudentAgentAssignmentUpdateManyWithWhereWithoutTeacherInput | StudentAgentAssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedAgentsInput = {
    create?: XOR<UserCreateWithoutCreatedAgentsInput, UserUncheckedCreateWithoutCreatedAgentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAgentsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentAgentAssignmentCreateNestedManyWithoutAgentInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutAgentInput, StudentAgentAssignmentUncheckedCreateWithoutAgentInput> | StudentAgentAssignmentCreateWithoutAgentInput[] | StudentAgentAssignmentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutAgentInput | StudentAgentAssignmentCreateOrConnectWithoutAgentInput[]
    createMany?: StudentAgentAssignmentCreateManyAgentInputEnvelope
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
  }

  export type StudentAgentAssignmentUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutAgentInput, StudentAgentAssignmentUncheckedCreateWithoutAgentInput> | StudentAgentAssignmentCreateWithoutAgentInput[] | StudentAgentAssignmentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutAgentInput | StudentAgentAssignmentCreateOrConnectWithoutAgentInput[]
    createMany?: StudentAgentAssignmentCreateManyAgentInputEnvelope
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCreatedAgentsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedAgentsInput, UserUncheckedCreateWithoutCreatedAgentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAgentsInput
    upsert?: UserUpsertWithoutCreatedAgentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedAgentsInput, UserUpdateWithoutCreatedAgentsInput>, UserUncheckedUpdateWithoutCreatedAgentsInput>
  }

  export type StudentAgentAssignmentUpdateManyWithoutAgentNestedInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutAgentInput, StudentAgentAssignmentUncheckedCreateWithoutAgentInput> | StudentAgentAssignmentCreateWithoutAgentInput[] | StudentAgentAssignmentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutAgentInput | StudentAgentAssignmentCreateOrConnectWithoutAgentInput[]
    upsert?: StudentAgentAssignmentUpsertWithWhereUniqueWithoutAgentInput | StudentAgentAssignmentUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: StudentAgentAssignmentCreateManyAgentInputEnvelope
    set?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    disconnect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    delete?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    update?: StudentAgentAssignmentUpdateWithWhereUniqueWithoutAgentInput | StudentAgentAssignmentUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: StudentAgentAssignmentUpdateManyWithWhereWithoutAgentInput | StudentAgentAssignmentUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
  }

  export type StudentAgentAssignmentUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<StudentAgentAssignmentCreateWithoutAgentInput, StudentAgentAssignmentUncheckedCreateWithoutAgentInput> | StudentAgentAssignmentCreateWithoutAgentInput[] | StudentAgentAssignmentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: StudentAgentAssignmentCreateOrConnectWithoutAgentInput | StudentAgentAssignmentCreateOrConnectWithoutAgentInput[]
    upsert?: StudentAgentAssignmentUpsertWithWhereUniqueWithoutAgentInput | StudentAgentAssignmentUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: StudentAgentAssignmentCreateManyAgentInputEnvelope
    set?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    disconnect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    delete?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    connect?: StudentAgentAssignmentWhereUniqueInput | StudentAgentAssignmentWhereUniqueInput[]
    update?: StudentAgentAssignmentUpdateWithWhereUniqueWithoutAgentInput | StudentAgentAssignmentUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: StudentAgentAssignmentUpdateManyWithWhereWithoutAgentInput | StudentAgentAssignmentUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
  }

  export type AgentsCreateNestedOneWithoutStudentAssignmentsInput = {
    create?: XOR<AgentsCreateWithoutStudentAssignmentsInput, AgentsUncheckedCreateWithoutStudentAssignmentsInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutStudentAssignmentsInput
    connect?: AgentsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedStudentsInput = {
    create?: XOR<UserCreateWithoutAssignedStudentsInput, UserUncheckedCreateWithoutAssignedStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedByTeacherInput = {
    create?: XOR<UserCreateWithoutAssignedByTeacherInput, UserUncheckedCreateWithoutAssignedByTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedByTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type AgentsUpdateOneRequiredWithoutStudentAssignmentsNestedInput = {
    create?: XOR<AgentsCreateWithoutStudentAssignmentsInput, AgentsUncheckedCreateWithoutStudentAssignmentsInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutStudentAssignmentsInput
    upsert?: AgentsUpsertWithoutStudentAssignmentsInput
    connect?: AgentsWhereUniqueInput
    update?: XOR<XOR<AgentsUpdateToOneWithWhereWithoutStudentAssignmentsInput, AgentsUpdateWithoutStudentAssignmentsInput>, AgentsUncheckedUpdateWithoutStudentAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedStudentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedStudentsInput, UserUncheckedCreateWithoutAssignedStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedStudentsInput
    upsert?: UserUpsertWithoutAssignedStudentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedStudentsInput, UserUpdateWithoutAssignedStudentsInput>, UserUncheckedUpdateWithoutAssignedStudentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedByTeacherNestedInput = {
    create?: XOR<UserCreateWithoutAssignedByTeacherInput, UserUncheckedCreateWithoutAssignedByTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedByTeacherInput
    upsert?: UserUpsertWithoutAssignedByTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedByTeacherInput, UserUpdateWithoutAssignedByTeacherInput>, UserUncheckedUpdateWithoutAssignedByTeacherInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AgentsCreateWithoutCreatorInput = {
    agent_id: string
    is_public?: boolean
    studentAssignments?: StudentAgentAssignmentCreateNestedManyWithoutAgentInput
  }

  export type AgentsUncheckedCreateWithoutCreatorInput = {
    id?: number
    agent_id: string
    is_public?: boolean
    studentAssignments?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentsCreateOrConnectWithoutCreatorInput = {
    where: AgentsWhereUniqueInput
    create: XOR<AgentsCreateWithoutCreatorInput, AgentsUncheckedCreateWithoutCreatorInput>
  }

  export type AgentsCreateManyCreatorInputEnvelope = {
    data: AgentsCreateManyCreatorInput | AgentsCreateManyCreatorInput[]
  }

  export type StudentAgentAssignmentCreateWithoutStudentInput = {
    agent: AgentsCreateNestedOneWithoutStudentAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignedByTeacherInput
  }

  export type StudentAgentAssignmentUncheckedCreateWithoutStudentInput = {
    id?: number
    agent_id: number
    assigned_by: number
  }

  export type StudentAgentAssignmentCreateOrConnectWithoutStudentInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    create: XOR<StudentAgentAssignmentCreateWithoutStudentInput, StudentAgentAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type StudentAgentAssignmentCreateManyStudentInputEnvelope = {
    data: StudentAgentAssignmentCreateManyStudentInput | StudentAgentAssignmentCreateManyStudentInput[]
  }

  export type StudentAgentAssignmentCreateWithoutTeacherInput = {
    agent: AgentsCreateNestedOneWithoutStudentAssignmentsInput
    student: UserCreateNestedOneWithoutAssignedStudentsInput
  }

  export type StudentAgentAssignmentUncheckedCreateWithoutTeacherInput = {
    id?: number
    agent_id: number
    student_id: number
  }

  export type StudentAgentAssignmentCreateOrConnectWithoutTeacherInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    create: XOR<StudentAgentAssignmentCreateWithoutTeacherInput, StudentAgentAssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type StudentAgentAssignmentCreateManyTeacherInputEnvelope = {
    data: StudentAgentAssignmentCreateManyTeacherInput | StudentAgentAssignmentCreateManyTeacherInput[]
  }

  export type AgentsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AgentsWhereUniqueInput
    update: XOR<AgentsUpdateWithoutCreatorInput, AgentsUncheckedUpdateWithoutCreatorInput>
    create: XOR<AgentsCreateWithoutCreatorInput, AgentsUncheckedCreateWithoutCreatorInput>
  }

  export type AgentsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AgentsWhereUniqueInput
    data: XOR<AgentsUpdateWithoutCreatorInput, AgentsUncheckedUpdateWithoutCreatorInput>
  }

  export type AgentsUpdateManyWithWhereWithoutCreatorInput = {
    where: AgentsScalarWhereInput
    data: XOR<AgentsUpdateManyMutationInput, AgentsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AgentsScalarWhereInput = {
    AND?: AgentsScalarWhereInput | AgentsScalarWhereInput[]
    OR?: AgentsScalarWhereInput[]
    NOT?: AgentsScalarWhereInput | AgentsScalarWhereInput[]
    id?: IntFilter<"Agents"> | number
    agent_id?: StringFilter<"Agents"> | string
    created_by?: IntFilter<"Agents"> | number
    is_public?: BoolFilter<"Agents"> | boolean
  }

  export type StudentAgentAssignmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    update: XOR<StudentAgentAssignmentUpdateWithoutStudentInput, StudentAgentAssignmentUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentAgentAssignmentCreateWithoutStudentInput, StudentAgentAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type StudentAgentAssignmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    data: XOR<StudentAgentAssignmentUpdateWithoutStudentInput, StudentAgentAssignmentUncheckedUpdateWithoutStudentInput>
  }

  export type StudentAgentAssignmentUpdateManyWithWhereWithoutStudentInput = {
    where: StudentAgentAssignmentScalarWhereInput
    data: XOR<StudentAgentAssignmentUpdateManyMutationInput, StudentAgentAssignmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentAgentAssignmentScalarWhereInput = {
    AND?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
    OR?: StudentAgentAssignmentScalarWhereInput[]
    NOT?: StudentAgentAssignmentScalarWhereInput | StudentAgentAssignmentScalarWhereInput[]
    id?: IntFilter<"StudentAgentAssignment"> | number
    agent_id?: IntFilter<"StudentAgentAssignment"> | number
    student_id?: IntFilter<"StudentAgentAssignment"> | number
    assigned_by?: IntFilter<"StudentAgentAssignment"> | number
  }

  export type StudentAgentAssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    update: XOR<StudentAgentAssignmentUpdateWithoutTeacherInput, StudentAgentAssignmentUncheckedUpdateWithoutTeacherInput>
    create: XOR<StudentAgentAssignmentCreateWithoutTeacherInput, StudentAgentAssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type StudentAgentAssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    data: XOR<StudentAgentAssignmentUpdateWithoutTeacherInput, StudentAgentAssignmentUncheckedUpdateWithoutTeacherInput>
  }

  export type StudentAgentAssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: StudentAgentAssignmentScalarWhereInput
    data: XOR<StudentAgentAssignmentUpdateManyMutationInput, StudentAgentAssignmentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type UserCreateWithoutCreatedAgentsInput = {
    email: string
    name?: string | null
    role: $Enums.Role
    assignedStudents?: StudentAgentAssignmentCreateNestedManyWithoutStudentInput
    assignedByTeacher?: StudentAgentAssignmentCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutCreatedAgentsInput = {
    id?: number
    email: string
    name?: string | null
    role: $Enums.Role
    assignedStudents?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutStudentInput
    assignedByTeacher?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutCreatedAgentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedAgentsInput, UserUncheckedCreateWithoutCreatedAgentsInput>
  }

  export type StudentAgentAssignmentCreateWithoutAgentInput = {
    student: UserCreateNestedOneWithoutAssignedStudentsInput
    teacher: UserCreateNestedOneWithoutAssignedByTeacherInput
  }

  export type StudentAgentAssignmentUncheckedCreateWithoutAgentInput = {
    id?: number
    student_id: number
    assigned_by: number
  }

  export type StudentAgentAssignmentCreateOrConnectWithoutAgentInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    create: XOR<StudentAgentAssignmentCreateWithoutAgentInput, StudentAgentAssignmentUncheckedCreateWithoutAgentInput>
  }

  export type StudentAgentAssignmentCreateManyAgentInputEnvelope = {
    data: StudentAgentAssignmentCreateManyAgentInput | StudentAgentAssignmentCreateManyAgentInput[]
  }

  export type UserUpsertWithoutCreatedAgentsInput = {
    update: XOR<UserUpdateWithoutCreatedAgentsInput, UserUncheckedUpdateWithoutCreatedAgentsInput>
    create: XOR<UserCreateWithoutCreatedAgentsInput, UserUncheckedCreateWithoutCreatedAgentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedAgentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedAgentsInput, UserUncheckedUpdateWithoutCreatedAgentsInput>
  }

  export type UserUpdateWithoutCreatedAgentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    assignedStudents?: StudentAgentAssignmentUpdateManyWithoutStudentNestedInput
    assignedByTeacher?: StudentAgentAssignmentUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedAgentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    assignedStudents?: StudentAgentAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    assignedByTeacher?: StudentAgentAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentAgentAssignmentUpsertWithWhereUniqueWithoutAgentInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    update: XOR<StudentAgentAssignmentUpdateWithoutAgentInput, StudentAgentAssignmentUncheckedUpdateWithoutAgentInput>
    create: XOR<StudentAgentAssignmentCreateWithoutAgentInput, StudentAgentAssignmentUncheckedCreateWithoutAgentInput>
  }

  export type StudentAgentAssignmentUpdateWithWhereUniqueWithoutAgentInput = {
    where: StudentAgentAssignmentWhereUniqueInput
    data: XOR<StudentAgentAssignmentUpdateWithoutAgentInput, StudentAgentAssignmentUncheckedUpdateWithoutAgentInput>
  }

  export type StudentAgentAssignmentUpdateManyWithWhereWithoutAgentInput = {
    where: StudentAgentAssignmentScalarWhereInput
    data: XOR<StudentAgentAssignmentUpdateManyMutationInput, StudentAgentAssignmentUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentsCreateWithoutStudentAssignmentsInput = {
    agent_id: string
    is_public?: boolean
    creator: UserCreateNestedOneWithoutCreatedAgentsInput
  }

  export type AgentsUncheckedCreateWithoutStudentAssignmentsInput = {
    id?: number
    agent_id: string
    created_by: number
    is_public?: boolean
  }

  export type AgentsCreateOrConnectWithoutStudentAssignmentsInput = {
    where: AgentsWhereUniqueInput
    create: XOR<AgentsCreateWithoutStudentAssignmentsInput, AgentsUncheckedCreateWithoutStudentAssignmentsInput>
  }

  export type UserCreateWithoutAssignedStudentsInput = {
    email: string
    name?: string | null
    role: $Enums.Role
    createdAgents?: AgentsCreateNestedManyWithoutCreatorInput
    assignedByTeacher?: StudentAgentAssignmentCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutAssignedStudentsInput = {
    id?: number
    email: string
    name?: string | null
    role: $Enums.Role
    createdAgents?: AgentsUncheckedCreateNestedManyWithoutCreatorInput
    assignedByTeacher?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutAssignedStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedStudentsInput, UserUncheckedCreateWithoutAssignedStudentsInput>
  }

  export type UserCreateWithoutAssignedByTeacherInput = {
    email: string
    name?: string | null
    role: $Enums.Role
    createdAgents?: AgentsCreateNestedManyWithoutCreatorInput
    assignedStudents?: StudentAgentAssignmentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAssignedByTeacherInput = {
    id?: number
    email: string
    name?: string | null
    role: $Enums.Role
    createdAgents?: AgentsUncheckedCreateNestedManyWithoutCreatorInput
    assignedStudents?: StudentAgentAssignmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAssignedByTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedByTeacherInput, UserUncheckedCreateWithoutAssignedByTeacherInput>
  }

  export type AgentsUpsertWithoutStudentAssignmentsInput = {
    update: XOR<AgentsUpdateWithoutStudentAssignmentsInput, AgentsUncheckedUpdateWithoutStudentAssignmentsInput>
    create: XOR<AgentsCreateWithoutStudentAssignmentsInput, AgentsUncheckedCreateWithoutStudentAssignmentsInput>
    where?: AgentsWhereInput
  }

  export type AgentsUpdateToOneWithWhereWithoutStudentAssignmentsInput = {
    where?: AgentsWhereInput
    data: XOR<AgentsUpdateWithoutStudentAssignmentsInput, AgentsUncheckedUpdateWithoutStudentAssignmentsInput>
  }

  export type AgentsUpdateWithoutStudentAssignmentsInput = {
    agent_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutCreatedAgentsNestedInput
  }

  export type AgentsUncheckedUpdateWithoutStudentAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutAssignedStudentsInput = {
    update: XOR<UserUpdateWithoutAssignedStudentsInput, UserUncheckedUpdateWithoutAssignedStudentsInput>
    create: XOR<UserCreateWithoutAssignedStudentsInput, UserUncheckedCreateWithoutAssignedStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedStudentsInput, UserUncheckedUpdateWithoutAssignedStudentsInput>
  }

  export type UserUpdateWithoutAssignedStudentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAgents?: AgentsUpdateManyWithoutCreatorNestedInput
    assignedByTeacher?: StudentAgentAssignmentUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAgents?: AgentsUncheckedUpdateManyWithoutCreatorNestedInput
    assignedByTeacher?: StudentAgentAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserUpsertWithoutAssignedByTeacherInput = {
    update: XOR<UserUpdateWithoutAssignedByTeacherInput, UserUncheckedUpdateWithoutAssignedByTeacherInput>
    create: XOR<UserCreateWithoutAssignedByTeacherInput, UserUncheckedCreateWithoutAssignedByTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedByTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedByTeacherInput, UserUncheckedUpdateWithoutAssignedByTeacherInput>
  }

  export type UserUpdateWithoutAssignedByTeacherInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAgents?: AgentsUpdateManyWithoutCreatorNestedInput
    assignedStudents?: StudentAgentAssignmentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedByTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAgents?: AgentsUncheckedUpdateManyWithoutCreatorNestedInput
    assignedStudents?: StudentAgentAssignmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AgentsCreateManyCreatorInput = {
    id?: number
    agent_id: string
    is_public?: boolean
  }

  export type StudentAgentAssignmentCreateManyStudentInput = {
    id?: number
    agent_id: number
    assigned_by: number
  }

  export type StudentAgentAssignmentCreateManyTeacherInput = {
    id?: number
    agent_id: number
    student_id: number
  }

  export type AgentsUpdateWithoutCreatorInput = {
    agent_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    studentAssignments?: StudentAgentAssignmentUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    studentAssignments?: StudentAgentAssignmentUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentAgentAssignmentUpdateWithoutStudentInput = {
    agent?: AgentsUpdateOneRequiredWithoutStudentAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignedByTeacherNestedInput
  }

  export type StudentAgentAssignmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    assigned_by?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAgentAssignmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    assigned_by?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAgentAssignmentUpdateWithoutTeacherInput = {
    agent?: AgentsUpdateOneRequiredWithoutStudentAssignmentsNestedInput
    student?: UserUpdateOneRequiredWithoutAssignedStudentsNestedInput
  }

  export type StudentAgentAssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAgentAssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAgentAssignmentCreateManyAgentInput = {
    id?: number
    student_id: number
    assigned_by: number
  }

  export type StudentAgentAssignmentUpdateWithoutAgentInput = {
    student?: UserUpdateOneRequiredWithoutAssignedStudentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignedByTeacherNestedInput
  }

  export type StudentAgentAssignmentUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    assigned_by?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAgentAssignmentUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    assigned_by?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}