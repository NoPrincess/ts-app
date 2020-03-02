export interface EmployeeRequest {
    name?: string
    departmentId?: number
}

export interface EmployeeInfo {
    id: number
    key: number
    name: string
    department: string
    departmentId: number
    hiredate: string
    level: string
    levelId: number
}

export type EmployeeResponse = EmployeeInfo[] | undefined

export interface CreateRequest {
    name: string
    departmentId: number
    hiredate: string
    levelId: number
}

export interface CreateResponse {
    id: number
    key: number
}

export interface UpdateRequest {
    id: number
    name: string
    departmentId: number
    hiredate: string
    levelId: number
}

export interface DeleteRequest {
    id: number
}