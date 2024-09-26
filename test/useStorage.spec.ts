import { expect, test } from "vitest"

import {
  LocalStorageService,
  SessionStorageService
} from "../src/utils/useStorage"

// 在测试用例之前模拟 window 对象
// register()

test("SessionStorageService get", async () => {
  sessionStorage.setItem("testKey", JSON.stringify("testValue"))
  const value = await SessionStorageService.get("testKey")
  expect(value).toBe("testValue")
})

test("SessionStorageService set", async () => {
  SessionStorageService.set("testKey", "testValue")
  const value = sessionStorage.getItem("testKey")
  expect(value).toBe(JSON.stringify("testValue"))
})

test("SessionStorageService remove", async () => {
  sessionStorage.setItem("testKey", JSON.stringify("testValue"))
  SessionStorageService.remove("testKey")
  const value = sessionStorage.getItem("testKey")
  expect(value).toBeNull()
})

test("SessionStorageService clearExcept", async () => {
  sessionStorage.setItem("testKey1", JSON.stringify("testValue1"))
  sessionStorage.setItem("testKey2", JSON.stringify("testValue2"))
  await SessionStorageService.clearExcept("testKey1")
  const value1 = sessionStorage.getItem("testKey1")
  const value2 = sessionStorage.getItem("testKey2")
  expect(value1).toBe(JSON.stringify("testValue1"))
  expect(value2).toBeNull()
})

test("SessionStorageService clearAll", async () => {
  sessionStorage.setItem("testKey1", JSON.stringify("testValue1"))
  sessionStorage.setItem("testKey2", JSON.stringify("testValue2"))
  await SessionStorageService.clearAll()
  const value1 = sessionStorage.getItem("testKey1")
  const value2 = sessionStorage.getItem("testKey2")
  expect(value1).toBeNull()
  expect(value2).toBeNull()
})

test("LocalStorageService get", async () => {
  localStorage.setItem("testKey", JSON.stringify("testValue"))
  const value = await LocalStorageService.get("testKey")
  expect(value).toBe("testValue")
})

test("LocalStorageService set", async () => {
  LocalStorageService.set("testKey", "testValue")
  const value = localStorage.getItem("testKey")
  expect(value).toBe(JSON.stringify("testValue"))
})

test("LocalStorageService remove", async () => {
  localStorage.setItem("testKey", JSON.stringify("testValue"))
  LocalStorageService.remove("testKey")
  const value = localStorage.getItem("testKey")
  expect(value).toBeNull()
})

test("LocalStorageService clearExcept", async () => {
  localStorage.setItem("testKey1", JSON.stringify("testValue1"))
  localStorage.setItem("testKey2", JSON.stringify("testValue2"))
  await LocalStorageService.clearExcept("testKey1")
  const value1 = localStorage.getItem("testKey1")
  const value2 = localStorage.getItem("testKey2")
  expect(value1).toBe(JSON.stringify("testValue1"))
  expect(value2).toBeNull()
})

test("LocalStorageService clearAll", async () => {
  localStorage.setItem("testKey1", JSON.stringify("testValue1"))
  localStorage.setItem("testKey2", JSON.stringify("testValue2"))
  await LocalStorageService.clearAll()
  const value1 = localStorage.getItem("testKey1")
  const value2 = localStorage.getItem("testKey2")
  expect(value1).toBeNull()
  expect(value2).toBeNull()
})
