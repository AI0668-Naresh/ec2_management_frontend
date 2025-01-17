import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import { useNavigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Dolaunch from './components/Dolaunch';
import AWSlaunch from './components/AWSlaunch';
import Table from './components/Table';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = Cookies.get('access_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.1.109:5000/register', { username, password });
      navigate("/login");
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.109:5000/login', { username, password });
      const { access_token } = response.data;

      Cookies.set('access_token', access_token, { expires: 7 }); 
      setToken(access_token);
      navigate("/home");
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    Cookies.remove('access_token');
    setToken('');
    alert('Logged out');
  };

  // for  test
  const instances = [
    {
      "instance_id": "i-029eadf8f21dbdcd2",
      "instance_name": "RE_ST__DS_ubuntu_new",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "54.208.48.166",
      "private_ip": "172.31.56.161",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-041b14526bc7bfe1a",
      "instance_name": "HS_HMR__DS_hmr_ubuntu",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "54.204.213.146",
      "private_ip": "172.31.84.38",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f2763896a30c216a",
      "instance_name": "RE_ST__DS_ubuntu_dailyrun",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "54.205.238.59",
      "private_ip": "172.31.61.184",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00e9c1e7a2837a83d",
      "instance_name": "RE_STDS_DS_ST_dmg_stg",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "3.230.228.116",
      "private_ip": "172.31.89.33",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09d1bab644c6b5f65",
      "instance_name": "RE_STDS_DS_Djubo_jupyterNEW",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "54.156.129.13",
      "private_ip": "172.31.71.8",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ebe2208ab9948473",
      "instance_name": "RE_STDS_DS_Djubo_hourly",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "3.231.172.214",
      "private_ip": "172.31.93.28",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dd8a6e5783c89f21",
      "instance_name": "HS_RW__DS_jupy_sentiment",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "3.89.95.46",
      "private_ip": "172.31.83.104",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-096cee21a18cea87f",
      "instance_name": "RE_ST__ExeSumLive",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "52.20.222.238",
      "private_ip": "172.31.56.92",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f54554807fe8c793",
      "instance_name": "OH__Data_science_team",
      "account": "Account 900",
      "region": "us-east-1",
      "public_ip": "35.172.68.207",
      "private_ip": "172.31.44.137",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-007907318cc117c0b",
      "instance_name": "RE_ST__Rabbit_MQ",
      "account": "Account 900",
      "region": "us-west-1",
      "public_ip": "13.52.171.89",
      "private_ip": "172.31.20.81",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03c80d079361a05d8",
      "instance_name": "HS_RAPI__RMAPI_MSSQL",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.161.101.204",
      "private_ip": "172.31.3.255",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06848143bc46d20fc",
      "instance_name": "HS_RAPI__Postgres_RMAPI_ubuntu",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.230.39.88",
      "private_ip": "172.31.2.82",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dda7fb5f1752d965",
      "instance_name": "HS_HF__RM_ParquetProcess",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.68.252.225",
      "private_ip": "172.31.1.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fd2dbd2b6c346852",
      "instance_name": "HS_RAPI__beandev3_V1",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.89.55.97",
      "private_ip": "172.31.9.34",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d75feb2f777a029d",
      "instance_name": "HS_HF__Hospitality_PSQL",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.201.193.182",
      "private_ip": "172.31.8.137",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0858fac5c2995ea53",
      "instance_name": "HS_RAPI__RMAPI_MSSQL_2",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "52.12.251.175",
      "private_ip": "172.31.7.100",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c12c0da028a5be41",
      "instance_name": "HS_RAPI__aidevelb",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.166.252.38",
      "private_ip": "172.31.8.146",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08ca9f2dea9d38d1c",
      "instance_name": "HS_RAPI__NAT-SN1",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.39.69",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02bd37d1fa0749644",
      "instance_name": "OH__Ratemetrics-realtime",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.226.126.73",
      "private_ip": "172.31.65.69",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08cbdc052ef0f28b0",
      "instance_name": "HS_RAPI__Proxy-manager-Mongo",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.223.214.234",
      "private_ip": "172.31.64.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-059be978ae1bc1035",
      "instance_name": "HS_RAPI__rmapisched",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.240.148.96",
      "private_ip": "172.31.17.86",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f7f6aae2a21c6b13",
      "instance_name": "HS_RAPI__ai-revmax",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.87.212.246",
      "private_ip": "172.31.18.104",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a90bd78b72a2c239",
      "instance_name": "RE_ST__DAstortrack",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.241.41.150",
      "private_ip": "172.31.22.229",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-022bed48b40b4761f",
      "instance_name": "HS_RAPI__Hotelrates_API-docker_stg",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.68.39.80",
      "private_ip": "172.31.21.98",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06bf415f2513b8464",
      "instance_name": "HS_RAPI__missedqueues",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.90.210.53",
      "private_ip": "172.31.25.110",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b5dc7fe75e48291",
      "instance_name": "HS_RAPI__Schedules_Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.231.56.175",
      "private_ip": "172.31.25.175",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0563174906ac39d94",
      "instance_name": "HS_RM__Realtime_split",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "52.12.161.143",
      "private_ip": "172.31.28.16",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-011cc72f9a1612b7e",
      "instance_name": "HS_RW__Hosp_ReviewsAPI-MONGO",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.239.80.194",
      "private_ip": "172.31.30.231",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06c533f73384449d2",
      "instance_name": "HS_RAPI__Schedules_stg",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.88.172.96",
      "private_ip": "172.31.31.204",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0371ebb75f71ceae7",
      "instance_name": "HS_HF__HotelDatabank_PSQL",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.162.129.122",
      "private_ip": "172.31.38.177",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d282719ad5641af1",
      "instance_name": "HS_RW__Hosp_ReviewsAPI-PSQL",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "52.26.106.221",
      "private_ip": "172.31.38.13",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09fc88a54b9f7e7b6",
      "instance_name": "HS_HF__Hotelpipeline",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "100.21.54.79",
      "private_ip": "172.31.58.39",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ebf6a39d46039022",
      "instance_name": "OH__proxyLog-API",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.37.139",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa83c19fab025984",
      "instance_name": "HS_RW__reviews-sentiment-analysis",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.212.69.43",
      "private_ip": "172.31.33.49",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a7db3484f710b7e1",
      "instance_name": "HS_RAPI__missed_queues_stg",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.218.136.184",
      "private_ip": "172.31.27.64",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f60c3a720edfcb79",
      "instance_name": "HS_RW__Reviews-scheduling",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.71.211.211",
      "private_ip": "172.31.18.187",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e499bccaf898e0e2",
      "instance_name": "OH__AI-Alerts-Staging",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.82.5.213",
      "private_ip": "172.31.30.188",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04139ae41e78ffea0",
      "instance_name": "HS_HF__PGSYNC_live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.84.102.121",
      "private_ip": "172.31.39.125",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d15ad7000f160543",
      "instance_name": "HS_RW__reviews-data-migration",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "52.32.114.8",
      "private_ip": "172.31.44.101",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0135e2238a0f77673",
      "instance_name": "HS_HF__HotedataBank_QC",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.211.160.107",
      "private_ip": "172.31.33.245",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e1cc7bdc31cd896f",
      "instance_name": "OH__AI-Production-Alerts",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.148.172.142",
      "private_ip": "172.31.19.44",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f6c05572d3938ec3",
      "instance_name": "HS_HF_Esearch_stg",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.68.224.234",
      "private_ip": "172.31.24.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c37ed4e8a5b7458e",
      "instance_name": "HS_RAPI__HotelRatesAPI-Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.244.253.117",
      "private_ip": "172.31.31.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02fa3ab4353db2569",
      "instance_name": "HS_RAPI__HotelRatesAPI-Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.220.138.78",
      "private_ip": "172.31.25.225",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0db77a2c33442bc23",
      "instance_name": "Reviews-API-Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.187.103.165",
      "private_ip": "172.31.21.35",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0061674e30a4e93a3",
      "instance_name": "RE_ST__DA_Stortrack",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.167.1.148",
      "private_ip": "172.31.41.134",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03d446ea73ea45f4f",
      "instance_name": "HS_RAPI__HotelRatesAPI-Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.95.9.18",
      "private_ip": "172.31.45.222",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08e4b89ab999f03cf",
      "instance_name": "HS_HF__pgsync_staging",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.46.156",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a5bf04d0f49b2d34",
      "instance_name": "HS_RAPI__HotelRatesAPI-Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.208.147.238",
      "private_ip": "172.31.33.127",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-032e843810937e69e",
      "instance_name": "HS_RM__Realtime_EKS",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.25.93",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0362440ce439c646b",
      "instance_name": "HS_RAPI__HotelRatesAPI-Live",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.92.245.183",
      "private_ip": "172.31.28.65",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03d1b9460944f2845",
      "instance_name": "HS_RR_realtime_redis",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.91.209.128",
      "private_ip": "172.31.23.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0460475c20e7cc311",
      "instance_name": "aibean-prd-new",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.217.22.182",
      "private_ip": "172.31.16.114",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07377ded35ca43fe0",
      "instance_name": "Reviews-API-Staging-New",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.212.243.150",
      "private_ip": "172.31.28.155",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ef980b4da379cb58",
      "instance_name": "Proxy-manager-api-stg-ASG",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.210.39.134",
      "private_ip": "172.31.29.18",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05c616bd3a387c820",
      "instance_name": "Proxy-manager-api-stg-ASG",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.186.100.69",
      "private_ip": "172.31.2.13",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008d3c48c0ca7a255",
      "instance_name": "HS_HF__HotelDatabank_PSQL_STG",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "52.11.51.62",
      "private_ip": "172.31.41.202",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-060a95d9a14fc614f",
      "instance_name": "RR_API_KAFKA",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.234.239.180",
      "private_ip": "172.31.40.134",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e2af06ec5822bdbc",
      "instance_name": "HS_RT_Extraction",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.216.193.236",
      "private_ip": "172.31.45.79",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-025f08f5770fad8b2",
      "instance_name": "HotelRatesAPI-dcmigration",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "54.245.145.244",
      "private_ip": "172.31.39.29",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00ba5bde61f6f33b2",
      "instance_name": "aibean-prd-new",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.216.172.167",
      "private_ip": "172.31.33.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0deaddedb1359c718",
      "instance_name": "Proxy-manager-api-stg-ASG",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "34.222.48.218",
      "private_ip": "172.31.33.103",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00d4d4bfd7d779dc2",
      "instance_name": "HS_RT_Extraction",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "18.236.154.201",
      "private_ip": "172.31.46.66",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a9f7d3ad1fadfcc4",
      "instance_name": "HS_RT_realtime_mongo",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "52.12.247.183",
      "private_ip": "172.31.28.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05aa7256a78bd74f0",
      "instance_name": "HotelRatesAPI-dcmigration",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "35.91.43.216",
      "private_ip": "172.31.30.209",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07f7410994750f9d9",
      "instance_name": "aibean-dev-new",
      "account": "Account 900",
      "region": "us-west-2",
      "public_ip": "44.224.145.3",
      "private_ip": "172.31.23.71",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d5cf95cd333dd7d3",
      "instance_name": "AT_SW__SW_PSQL_API",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "52.21.150.163",
      "private_ip": "172.31.66.131",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0269006943a3b62f8",
      "instance_name": "AT_SW__SFTP_ENT",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "54.227.167.251",
      "private_ip": "172.31.58.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0854626a1378278a6",
      "instance_name": "AT_SW__SFTP_UA",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.213.180.216",
      "private_ip": "172.31.57.214",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00400a874925b669b",
      "instance_name": "AT_FT__Faretrack_API_server",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "54.160.133.18",
      "private_ip": "172.31.47.100",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08143525995b98fa6",
      "instance_name": "AT_FT__Faretrack_App_server",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.226.159.224",
      "private_ip": "172.31.41.82",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-063f30d14eb4fea8c",
      "instance_name": "HS_EV__EDDI_API",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.50.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-070131512521edc19",
      "instance_name": "AT_SW__SW_test_api",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "52.21.88.100",
      "private_ip": "172.31.53.219",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e784623e42bcc7d8",
      "instance_name": "AT_SW__sharma_fastapi",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.84.15.189",
      "private_ip": "172.31.54.88",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07c6833a5f01ec8ea",
      "instance_name": "AT_SW__sw-test-api2",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.57.72",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c72c78df9dbe2a73",
      "instance_name": "RC__ABG_delivery_win",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.223.82.68",
      "private_ip": "172.31.76.88",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-037293834ed9cb890",
      "instance_name": "HS_RW__Reviews_API[Airfare_API]",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.233.80.221",
      "private_ip": "172.31.40.253",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01e01ebf346b635b7",
      "instance_name": "OH__Metabase",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "54.205.219.101",
      "private_ip": "172.31.71.98",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f550bbaaad0a3894",
      "instance_name": "AT_FT__Faretrack_Staging_Server",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.93.91.173",
      "private_ip": "172.31.41.247",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0be5893424e267c56",
      "instance_name": "AT_SW__sw",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "44.207.241.81",
      "private_ip": "172.31.73.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-058c69ba7854c0b25",
      "instance_name": "AT_SW__sw",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "54.208.85.44",
      "private_ip": "172.31.70.40",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-035ad81cd2e59c5c5",
      "instance_name": "AT_FT__Historical_data_migration",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "52.5.103.19",
      "private_ip": "172.31.52.182",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d170a77e0751ba7f",
      "instance_name": "AT_SW__AI_Southwest_API",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "54.145.216.110",
      "private_ip": "172.31.48.141",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d6265e4cbe02245b",
      "instance_name": "AT_FT__Flightrates-API",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.54.217",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09a98f65e5f08d37c",
      "instance_name": "AT_FT__FT-data-migration",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "54.243.154.132",
      "private_ip": "172.31.49.198",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04f3f30a56cc6ca11",
      "instance_name": "AT_FT__Flightsapi-error-logging",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.217.243.122",
      "private_ip": "172.31.27.128",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-061c8392fc2df66fa",
      "instance_name": "AT_FT__Optimize_App_Server",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.81.240.192",
      "private_ip": "172.31.21.160",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0882bde7f1e4cb150",
      "instance_name": "AT_FT__mongo-db",
      "account": "Account 106",
      "region": "us-east-1",
      "public_ip": "3.231.213.201",
      "private_ip": "172.31.70.153",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d07d1b1dcfaab8df",
      "instance_name": "RC__cars_ubuntu_gui",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.109.179",
      "private_ip": "172.31.23.123",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06ecf983040d54991",
      "instance_name": "RC__Rentalcars",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.52.61",
      "private_ip": "172.31.4.65",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03c952ba55baf2c8e",
      "instance_name": "HS_OYO__Oyo_postgresql_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.198.90",
      "private_ip": "172.31.0.121",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-061d92df7f231ab66",
      "instance_name": "RC__USAA_Token",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.99.83",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bef1477be4466548",
      "instance_name": "RC__NAT-SN1",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.219.123.233",
      "private_ip": "172.31.20.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09fec8e97fcf17e00",
      "instance_name": "RC__airflow_prod",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.11.157",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-013eed390272f2218",
      "instance_name": "RC__Carrental-Stg",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "184.169.151.232",
      "private_ip": "172.31.13.180",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-029aedc4f59ca3755",
      "instance_name": "RC__Carrental-Prod",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.70.102",
      "private_ip": "172.31.4.188",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f39c1d3b3cc49373",
      "instance_name": "RC__Carrental_Product_PSQL",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.113.130",
      "private_ip": "172.31.9.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00adc2fcf01b02009",
      "instance_name": "RC__USAA_24_06_2024",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.103.65",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a9457edb3a96901e",
      "instance_name": "AT_SW__delta_airlines",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.56.151.181",
      "private_ip": "172.31.29.75",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02e943cc396a770bc",
      "instance_name": "RC_LIVESHOPPING_API_redis_server",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.111.14",
      "private_ip": "172.31.21.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0356113b0526a4247",
      "instance_name": "RC_LIVESHOPPING_API",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.86.150",
      "private_ip": "172.31.6.55",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bdae90a0fb71c285",
      "instance_name": "RC_Momondo",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.6.8",
      "private_ip": "172.31.13.157",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b7af138d4ee2e0a",
      "instance_name": "RC_Momondo",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.177.171.146",
      "private_ip": "172.31.13.175",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09595c32827d76d9b",
      "instance_name": "RC_Expedia_EMEA_18",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.19.221",
      "private_ip": "172.31.15.28",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1b15e6b0742da0d",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.198.240",
      "private_ip": "172.31.10.50",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05965be6d1c41552b",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.156.42",
      "private_ip": "172.31.11.113",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f62fe2a68c2ce70b",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.100.113",
      "private_ip": "172.31.3.143",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07ecefe11582bf9d7",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.79.211",
      "private_ip": "172.31.11.77",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-089a0f6b63e3c278b",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.116.176",
      "private_ip": "172.31.3.187",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e6b957b25e4fc91c",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.142.118",
      "private_ip": "172.31.11.120",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dfae283e30540066",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.151.86.224",
      "private_ip": "172.31.3.243",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bc62291bdc88ac20",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.70.208",
      "private_ip": "172.31.5.61",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0df8dc266e98f918a",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.186.124",
      "private_ip": "172.31.4.61",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-041206ccecf6255e6",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.182.175",
      "private_ip": "172.31.6.0",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d46c67826480f0a6",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.111.81",
      "private_ip": "172.31.0.10",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0146285b25d25b056",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.147.202",
      "private_ip": "172.31.9.201",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c7f5ddf535c09559",
      "instance_name": "RC_EXP_NA_USSA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.24.138",
      "private_ip": "172.31.1.131",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0134624b4600ea565",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0699379fa1d97ad1a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-000a3803ca33ac5ab",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c585e875abf0f616",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d487fc168fcb16b4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-001cc0fd18c15bcbe",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051787493b69ccc80",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-073df58f44d464c33",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b40fd82118ad2527",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e797fde905deec8a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02be6e433826b2d31",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07b327c73602f0813",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0264e2c51eee4380e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a0f483f22197f93f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07b5c78af5fbe1095",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09f5bf42f6ace5b21",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06936f0a0d5f50b95",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d0d3ef7d24e23f71",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fd0ff85ab0f8d850",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07c70a13bb366544b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b08687e282413a00",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-032ced8e262cf8a83",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06b86a302b417f455",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-020b2afdccfb87c29",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dad49f8f04ce67f9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b42d7511ad5df7e6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08f93d12e026a3f55",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b3fdb76fe4c9a6a9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6150d1a605b3b0f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-092ff72f48c5b3378",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-033cbf1ea23dc3ac1",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a76ecb0777a3a49a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-053d94cd85ad494fe",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0670b335ba684491c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-061156b4e53302404",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f2c3991c200b86fa",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-005ef7e7b55cc3775",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01a868ec046abed31",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08cb5d31d20806314",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01c9ae94691666536",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c46f5464508ddcd6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0043738de52b5f0b5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-083776612c28da892",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09daedac9092fd46f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00542761ffa4c804d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0535700e6a74ebdb6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05f79cd69b8a894bd",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09f71a64a1b4e6568",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0192d8d21cecf6acf",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06b133c7319bf499f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0306adedf972e818a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03fe53a7d964282bb",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-059e12e08a0aff8c9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08b815accdc9f2c02",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fe681552e7a581f7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-065b112ddc5f837a5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05a0236ea57a5b964",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008fe74d210aea886",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b0fe14a76b87633",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0435049c419fc4a4a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05621edd6a7479c9c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0336876dd3f197777",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-012a918daea42b42b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-011f7e212b918cee6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0910fb14abc99bc01",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0addf9d24e0e699f2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a20219017a01df81",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f49003e7e33a3385",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c2092a8fb40c94f9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f78f276a4d5db235",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e340d157a1536172",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-074993bb2381c493f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0092b35850407a4b0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-018305a041e66a1a9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b7a88770bedbcff",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-030bac8a56dd498a8",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0195e9e5deb178a0f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02e9ff94f3af2b043",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0724cfca496fb43d4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b1726e1dc7106573",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e560b84ee1f42976",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04d2fefb197e897fa",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051729cee708749df",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08be949323720ae76",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fc21c4292ed12d1c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ba503f3053d5f1cf",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06659a67353f046ea",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0818f5676baa76f0a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06b09f2c9ecf76ab3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dce969ecfe03347a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0702ae04afbcd95e6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d697e4a9b812fa14",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07a12d93a8dd8b2da",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fe62cf9afc8690ed",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c7985d30bf16deca",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b40f0a0ec94039c2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0afb87bff4bf598d9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d4a2cfbbc0295007",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c70e190fdd57debf",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-097284172624460f7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bd9bfc73d490fa7e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b370018c7aac5ed8",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cf4b377c12cf7155",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07ec00b2ada371956",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01a03ff99ecf70ecb",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02d00d053c2588093",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08d7743cda371d1e4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dcf52414f637f90e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-082348b5e532f163f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06838c208f26c5ba8",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-033cbe891c368a888",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-015ea17db73f42f14",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-035ccf0258c80c79e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-078be5751b3debb01",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a616921c145b2c61",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04f42432a7e982c47",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05ca236ab009d239f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e41d4e9b53a32cf3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00aa5a191a4e71c01",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-012836e11cddd554d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0102b8a68a1997683",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d76d5505729f6f2c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b6be9aefe154a00f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d2c1d7a1a60e96d3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00df54de844ab76ff",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0771ea370b6603876",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d5cca8138f93be0b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0db0904074382270b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03a433374d9f95e48",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03f6f2168d95844c4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ddd673f4438aa7b0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04984821dc0b087a2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-069fb948c5b6f6c9b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00db54a68637e095e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0107cedea3deef8c9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a3e25abc1d02f8a1",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ad991686d8cc81e0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-053f0ab95859611bc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0666f57dfd23d92b6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07857b16b984530eb",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ba3f0aa9de026cf9",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.251.13",
      "private_ip": "172.31.100.42",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ccd73a8e34c0907c",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.189.68",
      "private_ip": "172.31.106.251",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09f649f639503dcd5",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.104.188",
      "private_ip": "172.31.99.92",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c5fa632c2a2f9557",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "184.72.18.32",
      "private_ip": "172.31.110.158",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0721719138262d90f",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.179.141",
      "private_ip": "172.31.110.210",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08fc438ceda117e21",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.74.81",
      "private_ip": "172.31.99.148",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0863951f24cb618b8",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.226.53",
      "private_ip": "172.31.105.249",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07a1c5187ad814314",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.99.96",
      "private_ip": "172.31.104.249",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b3945843068a6332",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.108.118",
      "private_ip": "172.31.108.65",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a8e3da96254ac675",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.150.109",
      "private_ip": "172.31.109.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09a59e24fc365129a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.177.73.121",
      "private_ip": "172.31.9.238",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c0349ab532daa169",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.88.140",
      "private_ip": "172.31.10.237",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bc1f02a17a6b4a96",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.142.29",
      "private_ip": "172.31.13.236",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0434e369c40234f24",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.177.162",
      "private_ip": "172.31.11.235",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0411d1350e631dc6b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.59.150",
      "private_ip": "172.31.0.232",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05641b2945cf1f9c4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.176.177",
      "private_ip": "172.31.9.231",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bdaba6b3f93e0303",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.118.217",
      "private_ip": "172.31.3.231",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09aa80d0708438f1d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.143.141",
      "private_ip": "172.31.7.229",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01fc2f4ffdf83e6a2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.109.117",
      "private_ip": "172.31.3.227",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06c8753fe4a514e4b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.98.7",
      "private_ip": "172.31.11.227",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0015e6230e45b00c0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.43.199",
      "private_ip": "172.31.7.227",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05622da77f0120a8e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.96.177",
      "private_ip": "172.31.13.227",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0eac82fe02cf5cc37",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.34.0",
      "private_ip": "172.31.4.225",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0000c5c2f8d421958",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.101.73",
      "private_ip": "172.31.0.224",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07b6b0766805c948e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.125.234",
      "private_ip": "172.31.12.195",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b87ba4b0d9c3542b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.219.170.219",
      "private_ip": "172.31.12.194",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d813b3970b294743",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.241.18",
      "private_ip": "172.31.3.255",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f13eb84cf03f58ad",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.74.80",
      "private_ip": "172.31.5.254",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02d8eff84acbc199b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.147.252",
      "private_ip": "172.31.5.253",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07ce62047a82825d8",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.201.228",
      "private_ip": "172.31.3.252",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09092d344c6365504",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.226.28",
      "private_ip": "172.31.4.247",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0aa2f6c05bdca983d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.223.42",
      "private_ip": "172.31.3.245",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-048e782ebf61dc8cd",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.27.245",
      "private_ip": "172.31.7.245",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b7859ff42bd786b2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.95.49",
      "private_ip": "172.31.15.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-078c1a6447e52fc4c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.217.119",
      "private_ip": "172.31.14.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-040704bba992307aa",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.1.4",
      "private_ip": "172.31.3.241",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dd412260d80c3e70",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.100.201",
      "private_ip": "172.31.0.240",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01d93cefc0b25baaa",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.240.155",
      "private_ip": "172.31.11.240",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e21215d086ba37c0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.222.18",
      "private_ip": "172.31.11.239",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6936c3252dceff0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.25.94",
      "private_ip": "172.31.4.238",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-010b92068647248d0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.72.120",
      "private_ip": "172.31.1.166",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00f072cdd1d888458",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.158.103",
      "private_ip": "172.31.4.221",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-055f2c6d4e277c805",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.225.70",
      "private_ip": "172.31.9.217",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d13c6469d05d5229",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.190.193",
      "private_ip": "172.31.7.216",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d9ce0c9d252106e4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.15.217",
      "private_ip": "172.31.15.214",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0576ddaa52163d535",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.196.191",
      "private_ip": "172.31.3.214",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0216d926f699b003b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.16.144",
      "private_ip": "172.31.14.211",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c265f6efdd0d87d2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.183.252",
      "private_ip": "172.31.7.205",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-060d292867db46dc4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.123.194",
      "private_ip": "172.31.13.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008b5a20f99cdd66c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.175.13",
      "private_ip": "172.31.12.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-023bf44a423263396",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.111.79",
      "private_ip": "172.31.11.202",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ad188a5e29248e3e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.110.145",
      "private_ip": "172.31.12.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09ad104115e8950e7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.63.75",
      "private_ip": "172.31.11.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6d4f6c56dec6937",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.81.106",
      "private_ip": "172.31.9.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e784525b34775585",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.247.123",
      "private_ip": "172.31.1.197",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0121964a978dfdba0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.9.185",
      "private_ip": "172.31.4.196",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04d1742bb1996aed3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.72.152",
      "private_ip": "172.31.2.132",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f423efd52486514c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.8.121",
      "private_ip": "172.31.14.128",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09b52b79f6503db6c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.144.181",
      "private_ip": "172.31.6.190",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08af0eb429cd021ce",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.219.159.240",
      "private_ip": "172.31.15.189",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-013a61c4f1ed27cd4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.237.75",
      "private_ip": "172.31.9.182",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-038ef108b00065572",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.18.232",
      "private_ip": "172.31.6.181",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06ff0f14f8bb6331e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.230.64",
      "private_ip": "172.31.1.181",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0660d33072a9ef295",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.149.107",
      "private_ip": "172.31.1.180",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-023d59b51ae4db89e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.58.135",
      "private_ip": "172.31.8.176",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0287143e9e73d31f4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.193.192",
      "private_ip": "172.31.3.173",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f039eb1e97561411",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.75.108",
      "private_ip": "172.31.1.173",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0be17e81bd83a46dd",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.61.199",
      "private_ip": "172.31.11.172",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b2a765aac0bb76e0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.18.70",
      "private_ip": "172.31.1.171",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01c3daa4b39b62224",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.10.59",
      "private_ip": "172.31.2.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bb31c22e941d17f0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.62.177",
      "private_ip": "172.31.14.169",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01d1b6269335ee8b5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.22.141",
      "private_ip": "172.31.4.168",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c77a81de3bd8ac27",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.174.218",
      "private_ip": "172.31.8.102",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cd3041d13e82eca0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.13.23",
      "private_ip": "172.31.15.101",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a14803fe2f5e6768",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.155.152",
      "private_ip": "172.31.3.98",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05168d19bdee3aa3f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.133.238",
      "private_ip": "172.31.2.96",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f59fb67cdc040262",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.54.17",
      "private_ip": "172.31.9.158",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c79ff667c0d18bb7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.82.35",
      "private_ip": "172.31.8.156",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0141d1825d5b3dd32",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.158.156",
      "private_ip": "172.31.11.151",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b76da8d9619a73c1",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.149.24",
      "private_ip": "172.31.2.149",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-044716eecd34c7f67",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.215.30",
      "private_ip": "172.31.9.144",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07973ff975797ca52",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.182.38",
      "private_ip": "172.31.3.141",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e1c83eed23c828ae",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.102.73",
      "private_ip": "172.31.10.140",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-062f9ddcb7912a99f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.217.80",
      "private_ip": "172.31.9.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05a920923ba24567a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.100.33",
      "private_ip": "172.31.2.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0488b9024d5d0337b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.152.160",
      "private_ip": "172.31.4.135",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01916ee756c4cb84d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.79.246",
      "private_ip": "172.31.7.133",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d1eaf92564c69982",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.154.22",
      "private_ip": "172.31.4.133",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06c6315a694303044",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.161.75",
      "private_ip": "172.31.9.122",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bc94877b17bc9c3b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.208.224",
      "private_ip": "172.31.15.119",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0776c829d8acc470e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.107.175",
      "private_ip": "172.31.2.119",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04df6e4e0536e3ba4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.154.28",
      "private_ip": "172.31.7.118",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-067b139911304a647",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.234.0",
      "private_ip": "172.31.4.114",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00e7a00e7c23be170",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.104.91",
      "private_ip": "172.31.2.113",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0862ba1074505588c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.178.248",
      "private_ip": "172.31.0.112",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06ddfcc3826a5ed82",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.187.1",
      "private_ip": "172.31.15.112",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0551b68c4288d2960",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.30.69",
      "private_ip": "172.31.5.110",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-065895c97a02afcbd",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.212.233",
      "private_ip": "172.31.15.110",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ee1c3e0a324a29f2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.151.33.65",
      "private_ip": "172.31.7.109",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-098573f7d1acbad4b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.147.97",
      "private_ip": "172.31.9.108",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ec400c6c10bffc85",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.25.112",
      "private_ip": "172.31.8.108",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0aa9c37f32f9f339d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.223.104",
      "private_ip": "172.31.3.108",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00296f6a1800f893a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.241.90.38",
      "private_ip": "172.31.13.105",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08337acdd5a8e34e9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.224.212",
      "private_ip": "172.31.5.103",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d82d597c479bf576",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.177.148.154",
      "private_ip": "172.31.0.91",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04db36a72d248d2ac",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.184.186",
      "private_ip": "172.31.2.89",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0600a6c537381d6b0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.248.206",
      "private_ip": "172.31.1.88",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01a2196e1589865a5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.149.206",
      "private_ip": "172.31.8.86",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c8c98364c51bad39",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.215.243",
      "private_ip": "172.31.6.86",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a524a02171cbd343",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.99.157",
      "private_ip": "172.31.5.81",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f6efd55d8aba5fae",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.71.70",
      "private_ip": "172.31.11.80",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b37d929e70ccf370",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.246.198",
      "private_ip": "172.31.14.77",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0377a47a3ee471f4a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.224.144",
      "private_ip": "172.31.0.76",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-000793aeb6a1eb29c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.149.161",
      "private_ip": "172.31.6.74",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00913a4affd3eb3fc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.203.101",
      "private_ip": "172.31.6.72",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-086ef4d2e82200525",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.151.36.195",
      "private_ip": "172.31.0.65",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02e54a9c907ef58f7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.8.169.148",
      "private_ip": "172.31.6.65",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-076a8f8edf3f9c24e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.66.156",
      "private_ip": "172.31.0.127",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a10bfabe9c11edb2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.219.54.93",
      "private_ip": "172.31.10.125",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b59613d5052d53dc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.54.48",
      "private_ip": "172.31.6.124",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0112f049897b07de9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.167.130",
      "private_ip": "172.31.6.57",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03bdd60a9bce71ba2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.207.121",
      "private_ip": "172.31.12.56",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0085a8671ff1ef4b3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.210.88",
      "private_ip": "172.31.4.54",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02bc138a6886e3cc6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.144.7",
      "private_ip": "172.31.14.50",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0307d4c5bee01be53",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.226.141",
      "private_ip": "172.31.9.48",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07347d6b74a0c1882",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.77.47",
      "private_ip": "172.31.9.47",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06acc42220807cc6f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.14.82",
      "private_ip": "172.31.9.45",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b1a4cf298fe2d252",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.123.86",
      "private_ip": "172.31.14.45",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051c365ebe2d734a4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.142.199",
      "private_ip": "172.31.3.42",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e410a47ee3d91fab",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.8.152.108",
      "private_ip": "172.31.7.42",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-037c43a72948093e1",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.26.9",
      "private_ip": "172.31.10.40",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-098f0085edf773350",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.166.50",
      "private_ip": "172.31.14.39",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-044b28b74216d4047",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.19.238",
      "private_ip": "172.31.11.38",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03d0ea3d417529348",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.170.201",
      "private_ip": "172.31.0.94",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04c849da44fd3dd5b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.25.105",
      "private_ip": "172.31.0.93",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bbd5ff7f05d6539a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.36.199",
      "private_ip": "172.31.3.91",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04e8c1bb835c9f112",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.29.51",
      "private_ip": "172.31.6.30",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a0874598efbce02f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.41.167",
      "private_ip": "172.31.2.28",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09cbc354d5173b3c6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.151.51.217",
      "private_ip": "172.31.5.27",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-063f66cd8b47ebebc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.221.231",
      "private_ip": "172.31.13.24",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0301250bd7a343e5e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.36.140",
      "private_ip": "172.31.10.23",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b6caa4b666cd6c26",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.226.246",
      "private_ip": "172.31.14.14",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03875c60fa3bbf2f3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.28.15",
      "private_ip": "172.31.12.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03992aecaea0efde2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.13.114",
      "private_ip": "172.31.15.8",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0de92732dd7808b4f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.67.52.105",
      "private_ip": "172.31.9.6",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e7104bb1513124ce",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.57.79",
      "private_ip": "172.31.10.5",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dbdb93f6a9fbd868",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.122.199",
      "private_ip": "172.31.6.5",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d2a25d589de49095",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.210.230",
      "private_ip": "172.31.11.63",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00bc9cf8b619f987f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.177.12.146",
      "private_ip": "172.31.1.63",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09450bc80766b4930",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.181.92",
      "private_ip": "172.31.11.61",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03dee4f118d6da75c",
      "instance_name": "HS_EV_eddi_kg",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.2.127",
      "private_ip": "172.31.11.138",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-005f002575de56459",
      "instance_name": "HS_EV_eddi_kg",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.219.10",
      "private_ip": "172.31.10.21",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ff37a1efda179a30",
      "instance_name": "HS_EV_eddi_kg",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.239.79",
      "private_ip": "172.31.12.20",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05979e5b00fad2a01",
      "instance_name": "HS_EV_eddi_kg",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.245.10",
      "private_ip": "172.31.13.178",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b6fbfe6a7be226a8",
      "instance_name": "HS_EV_eddi_kg",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.30.56",
      "private_ip": "172.31.6.173",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-080ca84469e715051",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08e775a3bdadf34e7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-093f142596dd27d96",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-082d5c96ad8a37c04",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-081621182adbc366d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f30f1a8c49dafda5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c26adb93b94ed3ec",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01d5428120e22ae1b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c16d408fab2d7e52",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05b19e912a82a4538",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-039f99852515aa387",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0365057cf826be3e7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d061b9a212ae62c8",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02fa34f6b49e6b1f6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01cdeaf8c648a0e4f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0737bd28b4727490e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04fc6e13fd73d89c4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05bc483602f6a2ae6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1a53abb21287a1f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0563a4335271e8354",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0665433a24ddbf01a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07aae74d65b6280b5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-082e4cc16ba776f80",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0892a597a2a0ba6a7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-004c4950f677a02f7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03c056fed02af90ae",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b66b2975b34b981a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-035b2cd2c1570407f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-030d792a36d965451",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08e7da8cf90d66b8e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-014f4937a88785f5e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07586175ca9aa28cc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d94ef863079eb90d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02814cf9483e598d9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-070ad021af875a8ff",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0005f0c90e096df17",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-001005801ed1cd051",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-085f142b8af12f00a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f4938f4039e2c1d6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03d5145c0cba8bbfe",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a88a9848e4e1e836",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0252222e06dc3072c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02fc87d2fa13441ad",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0caa8245086ece171",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03047921f1571a0ca",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08e0429c2747efa42",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1de695c5ebd61c2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-059b37da3ce03f269",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00cfaee3422cd4401",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e243335597d60af7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09d6160e21b5ab4f2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b7e78ee825360d65",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ba26594d8c02a1dd",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a2ab05f7976b9a1c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00a6aea2abce24e21",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03f97c728292c157f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c29aec2ff9c48bd7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-074efc2a3ae42d221",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ed411416f340da44",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0892c0be405b8f4b7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04ac6d017b3e5ab47",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-040e355097347b6fe",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0996f532705487adc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bc7923cb417c6060",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04adfdf30ee9665fa",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-005b5f2e68365aca0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08ca66f83abc12d92",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03255e09e889da894",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01536838019540cd4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-088d3366d7482942a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f837a752d6483c02",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05a4ad14d404a2ede",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0be07e2052a72770f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-066ac14847c1d4daa",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bcbeac6c69c4776b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-078d0d53e597d6703",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0046439da3fb0bbda",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0df3f82a7191172da",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02130a15e16e163f0",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0510bcb934df0cf6b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0225c9323faf81c70",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04bb6884044456f47",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0560acbbf36d3e0a4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08ea464b7b42be384",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04d85c6a11fc8ebd8",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e2644c166e6cd7f6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07db71cf1ff646c38",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b0fed9d0aa85abc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04d099b3b3f893bbc",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ea109bef75b6b8b1",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-044816eb61559c1db",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08744ce9ac33a3951",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0178c60412105cfde",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-099496741ef1f411c",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00dee06badb80d3ca",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-016f8c845104c5884",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fb2fa6e067fa8b51",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05531e9d8df38363f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d1ec7d48c2caa0b7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-024a27b12c49316fb",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0beb5201b13dd712d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04a4de2c4c82dcb84",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02f788231f3616894",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a97f616c16e5549f",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00be5ba2a37571e17",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fee49838b609363d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05f4be0c7f3bbdf8e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-069671e7ec0402235",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0aa31202d942c6267",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09781247796822f54",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-081134dff15cc4a68",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-052130968c5ca31b6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f560cce777b6189e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08084e7cfaa31286e",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0acf5c9fd889c0143",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08169d4b3081b08d9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e5d4bf930867711d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ef37607cf942e3ad",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0edb8b3c8cf4b8f63",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07a2a32c065c60e51",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0238d740620ba2ec7",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0de4e7cd004ebeadf",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b10da9c3b53a5fd1",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d6f7840d9dcf0097",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e28aca5fc2ec0291",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1cec24e5cccfbe4",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04f357234a2b7d976",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b2a974ecefad6afe",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e87f29e7433efda9",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-003cac8cd54489dde",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0af5fc223676f63fb",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-068ecd3bdff4c5f90",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d516de763f4d17b6",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0525ae4f91a82008a",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07e44781a7ad4057d",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08b8076bf6605bd7b",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b329e9f451fa1b73",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e43178d7398a8fb2",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0902b57b2bb158ec5",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cf9a657978ea25b3",
      "instance_name": "RC_costco_ubuntu",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d9e0cf436fcacfff",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0397c39d357ecc96c",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0332197b963daf9ab",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02f6d12e980b4b23b",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0429288e0a968f7eb",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fc46abb2d178a440",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6fefc259f1eef95",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0602db3ceb1282a30",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b5f4e765a4938362",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0476f0dcaa3d037f0",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dbaa14ca890f2dca",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0246a7af833833f97",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f2e64e5b22acf8df",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09e3553b6643d6ac1",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0253d7ec35ac04edc",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-005d0e3d925cd9935",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.183.205.147",
      "private_ip": "172.31.101.175",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-058d4117cb2591173",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.51.27",
      "private_ip": "172.31.96.95",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e93fa264d1ffd29f",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.215.230.173",
      "private_ip": "172.31.99.41",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a5e42651892539a8",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.3.170",
      "private_ip": "172.31.107.40",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0304135684f52942f",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.52.238.48",
      "private_ip": "172.31.96.125",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-065b884ef04fdd7ba",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.146.99",
      "private_ip": "172.31.107.236",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09ee81fbbdbc5be9e",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.10.111",
      "private_ip": "172.31.107.195",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09d7bbccea0e6b4ec",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.35.87",
      "private_ip": "172.31.103.243",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-047ae831e20d310f6",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.153.120.24",
      "private_ip": "172.31.100.38",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0920361b751dd9bfb",
      "instance_name": "RC_EHI_NA_Turo2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "50.18.241.28",
      "private_ip": "172.31.105.147",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-015de9c55882f4932",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.176.146.26",
      "private_ip": "172.31.31.127",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0075709ee0f0e6e0b",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.219.183.206",
      "private_ip": "172.31.27.65",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0011e418144851cfe",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.189.219",
      "private_ip": "172.31.23.108",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051cef0a834b68a2f",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0086f3405a897967f",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.21.23",
      "private_ip": "172.31.21.70",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6a2f92d1d8c20f1",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "54.193.158.123",
      "private_ip": "172.31.24.197",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fc242505b881898e",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.56.237.252",
      "private_ip": "172.31.30.116",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04cc90c07c9128bb6",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "13.57.220.131",
      "private_ip": "172.31.25.131",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f8a392fdd2227bfa",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "18.144.11.152",
      "private_ip": "172.31.20.2",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0774365af9fa45ac9",
      "instance_name": "RC_EHI_NA_TURO_2_V6",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "52.53.190.192",
      "private_ip": "172.31.19.50",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e9b175be1fbbc566",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0801cdeb91efa8bc5",
      "instance_name": "RC_Expedia_NA",
      "account": "Account 106",
      "region": "us-west-1",
      "public_ip": "3.101.30.105",
      "private_ip": "172.31.17.209",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0141d14189bdfb4cb",
      "instance_name": "RE_ST__ST_commonSFTP",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "52.36.180.30",
      "private_ip": "172.31.45.29",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d31dab863f842c89",
      "instance_name": "HS_RAPI__RM_Ftpnew",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "54.188.220.207",
      "private_ip": "172.31.16.117",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0813a215ad3cb9ade",
      "instance_name": "HS_EV__EDDI_tool_SQL",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "44.233.122.180",
      "private_ip": "172.31.15.41",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bdcd56b19376e198",
      "instance_name": "RI__SOMOS_SQLWeb",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "44.229.81.221",
      "private_ip": "172.31.11.7",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-083cb3fe8523fdfa4",
      "instance_name": "RE_ST__ST_wintool",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "44.238.42.135",
      "private_ip": "172.31.57.0",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fb9105313d7aa043",
      "instance_name": "HS_EV__Eddi_SQL_Automation",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "44.228.162.177",
      "private_ip": "172.31.8.238",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0395f67d1db12e76e",
      "instance_name": "AT_FT__SFTP_Flights_AirAsia",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "34.212.159.60",
      "private_ip": "172.31.55.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-028449912fdc0eb99",
      "instance_name": "HS_RW__MSSQL-Reviews and Ranking",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "100.22.1.57",
      "private_ip": "172.31.49.10",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09230a975445a9fb6",
      "instance_name": "HS_RM__Data lake Machine",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "54.244.231.175",
      "private_ip": "172.31.51.124",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03dc7eec7503ac0a3",
      "instance_name": "AT_FT__Arajet_SFTP_FT",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "34.216.115.51",
      "private_ip": "172.31.49.37",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-053c5d51ec43abb2b",
      "instance_name": "AT_SW__SW_API_Server",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "35.155.187.242",
      "private_ip": "172.31.59.248",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01084b9532d849202",
      "instance_name": "OH__Piggyback_SQLexpress",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "52.26.255.85",
      "private_ip": "172.31.55.35",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0376aa4dae44da2d8",
      "instance_name": "HS_EV__Eddi_API_July22",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "35.84.42.213",
      "private_ip": "172.31.2.113",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa1ef40819f34135",
      "instance_name": "HS_RM__Picasso_staging",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.59.246",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e97989b10542e347",
      "instance_name": "HS_RM__Picasso_MongoDB",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "52.33.117.203",
      "private_ip": "172.31.50.201",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07bfbfa5bf4cc28f4",
      "instance_name": "HS_RW__ReviewsAPInew",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "50.112.211.165",
      "private_ip": "172.31.57.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09b5f98125fc65ba5",
      "instance_name": "HS_RW__MSSQL-Reviews-api",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "52.43.168.35",
      "private_ip": "172.31.55.147",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02d54fb125dffb930",
      "instance_name": "HS_EV__Eddi_API_2",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "54.218.219.230",
      "private_ip": "172.31.12.132",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-030be077b077a59a6",
      "instance_name": "HS_EV__EDDI_API_NEW",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.33.22",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00718f16e0f5ace76",
      "instance_name": "HS_EV__EDDI_API_NEW1",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "35.83.190.249",
      "private_ip": "172.31.47.209",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f7b002fb3608c69f",
      "instance_name": "AT_FT__Airfare-env-cloned",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "35.165.97.243",
      "private_ip": "172.31.42.79",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05035d5f989b5da39",
      "instance_name": "RC__Carrentals-Mongo",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.19.169",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e1a7b4cf9dd873ac",
      "instance_name": "RE_ST__STcommonsftp_new",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "35.81.37.12",
      "private_ip": "172.31.41.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00107a80ef7c84eeb",
      "instance_name": "RC__NAT-SN1",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "34.220.223.166",
      "private_ip": "172.31.19.77",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0734d2cdfeaa87ddc",
      "instance_name": "HS_EV__Events_PSQL",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "44.230.79.243",
      "private_ip": "172.31.3.91",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05f299834b41f8fa0",
      "instance_name": "HS_TP_Themepark_process",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-033af74fdea7d10ee",
      "instance_name": "HS_TP_Themepark_process",
      "account": "Account 106",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08b60a07441bcd00c",
      "instance_name": "FE_DV__107_Server",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.36.162.107",
      "private_ip": "10.0.1.159",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0abe3d4397e8de095",
      "instance_name": "FE_DV__Staging_Web_78",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.37.198.165",
      "private_ip": "10.0.1.215",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0adc90f127fb59d50",
      "instance_name": "FE_DV__DBServer_201",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.32.55.108",
      "private_ip": "10.0.1.231",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b0bda30b82247479",
      "instance_name": "FE_DV__Datamart-rendertron",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.218.149.131",
      "private_ip": "172.31.31.211",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ad38c33d1adf7745",
      "instance_name": "RI__RSC&RichsData",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.161.24.164",
      "private_ip": "172.31.23.13",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-022774169f5bea1dc",
      "instance_name": "RE_SE__SE_DB",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.185.121.251",
      "private_ip": "172.31.38.92",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a5bc68bef52e4021",
      "instance_name": "RE_SE__SE_Webserver",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.149.96.33",
      "private_ip": "172.31.36.207",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fafda94f9101fcfa",
      "instance_name": "RE_ST__Staging_108Clone",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.39.210.102",
      "private_ip": "10.0.1.9",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04d415ac1c3b07314",
      "instance_name": "FE_DV__FST_Dev_01",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.232.119.108",
      "private_ip": "10.0.1.249",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00ad2411235f17fd4",
      "instance_name": "FE_DV__FST_Dev_03",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.40.34.29",
      "private_ip": "10.0.1.127",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b157840fafb6d868",
      "instance_name": "RC__RM_Avis_clone",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.213.238.18",
      "private_ip": "172.31.12.65",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ca77160435a7d304",
      "instance_name": "RC__100_test",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "100.21.242.146",
      "private_ip": "172.31.0.70",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fb13752f1daf12f4",
      "instance_name": "FE_DV__FST_Dev_10",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.216.242.52",
      "private_ip": "172.31.57.22",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-015cfb0cb87e1ffca",
      "instance_name": "AT_FT__ehi-dbs-sqlweb-new",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.236.17.149",
      "private_ip": "172.31.13.129",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0aab136f347f2fdf2",
      "instance_name": "RC__ehi-sqlweb-NA",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.89.109.18",
      "private_ip": "172.31.9.107",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bbd376933ec64bde",
      "instance_name": "AT_FT__Faretrack_B2B",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.162.95.221",
      "private_ip": "172.31.0.231",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02a1c74fa8e3869fb",
      "instance_name": "OH__ATS_Demo",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.167.68.17",
      "private_ip": "172.31.7.56",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00d443dce2b392b67",
      "instance_name": "AT_FT__Fetcherr_PSQL",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.208.41.138",
      "private_ip": "172.31.7.168",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00f4f4346743624b5",
      "instance_name": "AT_FT__faretrack_mongo_historical",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "100.21.125.224",
      "private_ip": "172.31.58.43",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c569634af743c6c1",
      "instance_name": "RC__Cars_Server_17_10_2023",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.27.88",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0af7412e4ad15190d",
      "instance_name": "RC__RC_ABG_SQL_New",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.165.50.114",
      "private_ip": "172.31.26.237",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06f0bbdbe470b66ac",
      "instance_name": "AT_FT__Faretrack_Offline_Delivery",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.155.36.53",
      "private_ip": "172.31.31.246",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02747d0f74b1a9fb7",
      "instance_name": "AT_UA__united_airlines_psql_new",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.37.135.55",
      "private_ip": "172.31.38.35",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e1eb7c08d34a0710",
      "instance_name": "RC__EHI_EMEA_QA_FTP",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.148.6.174",
      "private_ip": "172.31.37.5",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d46a0ca47e76fe9a",
      "instance_name": "AT_FT__Spear_FTDataManager",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.238.116.63",
      "private_ip": "172.31.40.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bb96a344b678f151",
      "instance_name": "FE_DV__Staging_Web_78_new",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "10.0.1.184",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-031b7f299ab5a3d0c",
      "instance_name": "AT_FT__Mongo-Mongos-Primary",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.235.218.3",
      "private_ip": "172.31.0.225",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cf119d7b14a0cd89",
      "instance_name": "AT_FT__Mongo-Shard1",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "100.21.13.80",
      "private_ip": "172.31.5.63",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d8f1f9df54f057c2",
      "instance_name": "AT_FT__Mongo-Shard2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "100.20.146.150",
      "private_ip": "172.31.10.119",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-066d51e4f2626feb3",
      "instance_name": "AT_FT__UnitedAirlines_PSQL",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.161.169.137",
      "private_ip": "172.31.34.125",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08c883f58f0589368",
      "instance_name": "RE_ST__MIGPSQL",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.224.223.114",
      "private_ip": "10.0.2.56",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07474047ab3f0be41",
      "instance_name": "RE_ST__MIG-Appserver",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.163.206.135",
      "private_ip": "10.0.2.112",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08833a0eecc442875",
      "instance_name": "RE_ST__MIGPSQL-Staging",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "10.0.2.82",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f475312dce6d174c",
      "instance_name": "AT_FT__Indigo_Api",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.201.151.234",
      "private_ip": "172.31.25.221",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09ec912830992cf55",
      "instance_name": "AT_FT__faretrack_staging_psql",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.88.8.117",
      "private_ip": "172.31.53.2",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f83d226b89103b09",
      "instance_name": "AT_FT__faretrack_mongodb_staging",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.41.109.161",
      "private_ip": "172.31.62.224",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0511ec4be2a994ff0",
      "instance_name": "RC__EHI_WEB",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.34.9.237",
      "private_ip": "172.31.12.74",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02c25afe605b26dbd",
      "instance_name": "AT_FT__Pricevolatility_vis_psql",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.10.248",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05174f4ec9fa8020c",
      "instance_name": "AT_FT__Psql_pricevolatility",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.3.178",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e21ca4f33964a099",
      "instance_name": "AT_FT__FT-MongoDB-Shard-1",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.202.118.126",
      "private_ip": "172.31.31.159",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04e1c6ee39ecd6054",
      "instance_name": "AT_FT__FT-MongoDB-Shard-2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.12.47.170",
      "private_ip": "172.31.19.121",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-078b49346ce25de50",
      "instance_name": "RC__rental_cars",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.240.125",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-084476819cd3ffe62",
      "instance_name": "AT_FT__eks",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.91.176.8",
      "private_ip": "172.31.39.20",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-093134a9e3c61200c",
      "instance_name": "AT_FT__Flightrates_realtime_redis",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.224.241.32",
      "private_ip": "172.31.33.223",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-063c61de21fda8cd9",
      "instance_name": "AT_FT__FT-MongoDB-Primary",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.218.190.166",
      "private_ip": "172.31.47.193",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03a920d24551f8424",
      "instance_name": "OH_ProxyAPI_PSQL",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.224.57.12",
      "private_ip": "172.31.12.240",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bca1eec56f6b39c9",
      "instance_name": "RC__EHI_MSSQL",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.40.98.36",
      "private_ip": "172.31.1.27",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e540deeed811da55",
      "instance_name": "AT_FT__FT_Indigo_transmutation",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.88.19.160",
      "private_ip": "172.31.7.40",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1d8f1ba0b255848",
      "instance_name": "AT_FT__Flights-Api-Stg",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.89.150.223",
      "private_ip": "172.31.47.113",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01617471d395bfd2c",
      "instance_name": "OH__Ai-Proxy-Engine",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.230.35.121",
      "private_ip": "172.31.34.18",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fd207387b4c1482e",
      "instance_name": "AT_SW__AT-WN-GGL-MSSQL",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.95.205.71",
      "private_ip": "172.31.31.131",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00fef63ee40fb3e8f",
      "instance_name": "AT_SW__ryip-testing",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.213.244.105",
      "private_ip": "172.31.85.201",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07ac620df5df63afc",
      "instance_name": "AT_AA_WN_KAYAK",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.47",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0213895cf642fb995",
      "instance_name": "AT_AA_WN_KAYAK",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.151.116",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0eef51dbd0e5b7353",
      "instance_name": "AT_AA_WN_KAYAK",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.176",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-095597e4184d1c028",
      "instance_name": "AT_FT__faretrack_Live_psql_v2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.230.171.81",
      "private_ip": "172.31.34.213",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c3bedc062df7adf3",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.202.184",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0edb046b6dbda2589",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.193.121",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a92785027943a12c",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.211.193",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-090e232c63ed123de",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.208.3",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e517ee10bb5029df",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.208.111",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02bfa3152c55d7354",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.216.51",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b89e8160ea538a2e",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.215.117",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a0257d2f87d1094f",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.205.53",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0df7e2bb93217e6fa",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.217.167",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ba921c99577f634f",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.201.44",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a263fb36ab583aed",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.196.237",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0987bc2efd4f38718",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.208.238",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-061c59be627dc5502",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.221.161",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-090d84dd0d2998e9a",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.194.36",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e73bc91b77b9ed09",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.223.166",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0af5650a3042a4dca",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.206.218",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08a2bc0f63f249a41",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.219.223",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ca2e5a16d8e2fa68",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.200.78",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03b8a53d0eb7b7984",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.198.19",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ac137441762f3179",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.195.150",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05cb964324edc5605",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.197.24",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c14841261f4604a2",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.202.69",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a13814d7a4e89aaa",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.220.7",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01ecd5ee7891c5ac0",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.195.201",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b81a05deb3f95f21",
      "instance_name": "AT_FT_Faretrcak_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.222.10",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-010f8a6c23773c7f0",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.218.163",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-036b9886716a94109",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.200.255",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-054b9c9d59f3aa645",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.215.28",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a26115f080accdd0",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.219.182",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ae5d465e795ecbe5",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.195.15",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bb066455e4ddb5ad",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.194.130",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fbce101a4ef9997a",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.207.218",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08885835991816a8e",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.198.141",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0eb3bfcd782e681e2",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.223.172",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0265a2f78918daca5",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.196.50",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c040e9dbc0d5d22b",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.215.251",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00829513f92f62b3c",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.202.47",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09476e46d23a880c4",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.204.6",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b41d244d9a4371b2",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.202.104",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00d3271e010fd512a",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.195.22",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ca5f5943381be361",
      "instance_name": "AT_FT_faretrack_POC_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.193.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-082dc2e3de77dc453",
      "instance_name": "flightsapi-cluster-flightsapi-c5xl-prod-Node",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.219.146.162",
      "private_ip": "172.31.6.128",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a45a5b20f60f5adc",
      "instance_name": "flightsapi-cluster-flightsapi-c5xl-prod-Node",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.164.134.9",
      "private_ip": "172.31.10.74",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0206491329d04ffff",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-072586bd60c8b1e5e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08220ce8f8b9d5392",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04e455db5e84b3f08",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b4b65e3b59778255",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06f27d6fcf0ad0f7c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ca874189b861897d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-017dac37f69fe0bb2",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e476b078b0df5b76",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0641973f6c0aaf2ef",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0578bed8848953dba",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-040a78e7a5e4695dd",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-035edfab2c18d9015",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09aaa0a8fa00587b8",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0aa6e0a8a6183a3e4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b3b9c45f75905b6",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.186",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-063ca92c35a32422a",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.185",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07a142875dcff7567",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.251",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-061d4ec2556e83e26",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.122.123",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02f39b77f9ffcc50b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.181",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b9fe97bc1911a583",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.52",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0750c82239f286057",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.248",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b6c30ee6a171bdd9",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.181",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e99d1b15f79a4b23",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.243",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f8e69dc5d9053be6",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.114",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0da4144d838fa5628",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.180",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b9d311234bc8baa1",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.180",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07af70a83325b90da",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.175",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01efb52785cdde3a7",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.175",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bdf54c8eb0dff86b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.177",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-088f91ee1a67372a4",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.48",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06472cf3831113719",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.93",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0df0e6274ea71935f",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.216",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00fcb584521a22172",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.126.95",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09337016a8c33505e",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.159",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04c0bb8cb78efbe69",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.18",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-077220c8407af2399",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.208",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06ed5b0d6f371e582",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.148",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02cb93ad7cc20d731",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.82",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0da047ef3289b93f7",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.70",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0109d09660fda4908",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.68",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00987a008fdb45c1e",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.143",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02f49fdc580f4944d",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.203",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08ef0cb0ac2c0eb47",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.122.191",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0114cbd0ad4418345",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.61",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d5e39cb0b2ea3b50",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.68",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05adadd8c0d84bd8c",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.64",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b6da873154616dff",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.236",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ba7cdc1728a6f6e8",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.122.41",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f742de34e8cd2ffe",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.174",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d41f8b949fd7bc92",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.173",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ebed1220357bf3b3",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.35",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-096a487d7bf793efe",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.41",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0973976c684d9ba23",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.229",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c347af6421d2b22e",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.122.95",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02d02f7c9e2c90b98",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a1a091d678861938",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bb34f2f02943f327",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09aa3cb8cee342f18",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08a6e048549e3a49e",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08e8553ada64789be",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-082664c3114f19dc4",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-082181991dbf9db90",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f8ccc3808843899a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05da40cb1b9f1587a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0498c9ccc9938cd05",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0422c55ca31391ee8",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0cf0f9a60f0fd759c",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08128933345b20412",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e342862802e963f4",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f89f18db0bdbae76",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f5ce31310e74010c",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-029ded6c214231d51",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04e8ba3eb88f53dfc",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0dccf0ea81c4f141f",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0643293708fe91118",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-030adc26a48c3754d",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01615c1eaac5ddbc2",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05c9dd6101d87abf4",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08a69f29bf1bc2392",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-025f328fa93a8a5fa",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03acd41e4b691323e",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00a08e4c4a68db791",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09ffbc972f0796e38",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06d09477e542858aa",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08e8d2b8c60fdee9d",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0835bb4a4306e6fb2",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0743c6171f963644a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-002099126b39d58ad",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07450fc19c26b2a0f",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01ede3cfe27c201b2",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01c9d511f0131be16",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08fa41bd250863757",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-067506f2afa2c476b",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bc97632593bf0598",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0719f5d0c85b1dd62",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05cc0daece3f52e82",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b2d983d2a2440cf5",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0da81a15645f7cdfc",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bdf959c363d6003d",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b24d9980a2cc2787",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0eca8f7065c40669b",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-072b430811a493ae5",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-052b6eac80b287e02",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b4d09a8d656b46b9",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ae5e47897de326bb",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-047d7b955a768275a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02613f41f490e6397",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d7e99ee122a5e50b",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0910331d18a4efb0a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c88961b857ab372a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05e2e46d26603e1c0",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a9aee5ed7cacd74d",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02987c165675aa1d9",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06d02bdb58184c33f",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02f4c6f186e441010",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d7c0669ea6fa6f38",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0378cc726927014f7",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0921013949c35b90b",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-026a7c0fcafaba3b9",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f8d8afecbefbf75b",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01cea1b946fe776be",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0977dc7f8db62695e",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-067a96910997753ca",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e74b01a4786b24c4",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-085bbc0c8579971cb",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08a86b00b60730726",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-049d00fb90b8c522d",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06bc05773b2ad7653",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ec820bdd5642217f",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a6303cc7e4f13b2e",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-079c9a12fe0d0cd17",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01ced1bdba598aade",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05ee094615658008e",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04cde80c8dc867a13",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0642c049ce99c6f5d",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-011565a139629fa50",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d113028d39bd4b40",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03cbd6e1ca33b3410",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-096b1dacf955bc75f",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00d00431cebb58029",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04c336757a5ffec1a",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0615a201244242a69",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07024d7bec25083ee",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ad7335a94b2a69ab",
      "instance_name": "AT_FT_faretrack_airasia",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02636e8147209063e",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.64",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cbe76de9693d6192",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.32",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0380a44850429fc82",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.99",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0394396f1457e2433",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.70",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03fe28bcd61b8398f",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.251",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b2e08ce71887fc94",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.251",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03d7d91a5d96d6b37",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.59",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04a20bbf2f2769b43",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.94",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ff35bae7b596b8e7",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-042b8f78b907f359b",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00a724a80bd597add",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.150",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05eaea02aadf75c6d",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.251",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b84afc10c506ebbf",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.109",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-066590b27a52ecc95",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.78",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a8dce1e27203f75d",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.208",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ee5b263e8143b397",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.16",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c46cba8174f33122",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.71",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02a906ef633721cdd",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.104",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ba80bbaf485c7cb3",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.122.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00267f35f7878c145",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.122.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02de006fac23d39fd",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0aa1bd8ee08de1c74",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f3e6a9cdf9b7f15d",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b149ffa4085b819c",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0eb95ac4ce982e660",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0191a68fa7f4181ce",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0592e396717b98c10",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0cedda9a1cddf0819",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-031ba6822d487de34",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00b15c7cf23347703",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03dd978c1582a555a",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-097d48b77e01a8db2",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bf0bce7cdd611016",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05e4847c7c68f5b5f",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-080084f8515e67e0c",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05f7235bca0e33b2e",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0387ce5c2fb1aa3d7",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-080772a6e4e83d962",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-026178c3c6d9c381a",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-067d423350790ac5d",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-093f4fb8b1f9fde47",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-016c0a6070d7731e7",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-089393dabdf7d81b5",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07d011f858a778b2b",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02130810fd12027f8",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0912605b3e693b477",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ee63e4f5de178a24",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04741e4fa74da7565",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a457814612c4fd39",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0dd7172e7ca605806",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04282c3bd2608dccc",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-010e3d73c6fba9b51",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a251ea843317bc3e",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.71",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f20a6c150ad891e5",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.134",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d7fb4103876237d1",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.195",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ecf2ccfb0998378b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.130",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06cf85a24c8d8b172",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.128",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-093c7d0147ce7cd86",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.60",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ec4d150d73a6f4f7",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.123",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04750661ae209cf54",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.121",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d63d3299f7e5aee3",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.120",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d10f422f19635f45",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.55",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e8e4c9ff15caf9f2",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.51",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b2155ca522548f3b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.243",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c2f0d38eb00d2244",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.242",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c642af46f9ba9d68",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.241",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-060cce0be0e173a7d",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.241",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02d0cf0efca7123f5",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.176",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01f425b13f856238c",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.221",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ee2a7baced63b084",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.221",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a73ad8d03ebcfae6",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.28",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0961fc5d35074ac4f",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.26",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fae09d22b4a60f93",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.218",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-077c39bcf4da6c277",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.154",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0acc82f03bbfe8bc3",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.126.90",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0148122e76ad87c52",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.21",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-002fb4ddd631773b6",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.84",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c61a91168ca3316e",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.147",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0971df7c0a0c43853",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.146",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-028b7550d52e2c2c8",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.12",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0761a7edc4c5f8df5",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.204",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-024de210caba9ba4a",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.123.10",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06f072d25a364d987",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.174",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0edbe14fd34c0d435",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.46",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0abfe5607d3c04702",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.107",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-055d7fd0ad7ceb206",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.106",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07a6e0e65e5979c56",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.233",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07359715f326eb210",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.39",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06f624d322d9f8851",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.164",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-041e795379cbdab0b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.100",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-009eb756d03fdb1ea",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.226",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08f1b21113da5401f",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.160",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e931aa036bc5ad6d",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09eb889ca423a1a5b",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.55",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f8ebe8f00e724223",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0497becfa02428ae5",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0912924d1553a67d2",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-005bc2c9aec9f5542",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ca0facb680c090b3",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-051a3b52755ff5780",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e084b3a826ec08ad",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0422f97d6646a29aa",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08addd7f3be2eee2b",
      "instance_name": "RE_ST__Demographics-API",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.227.156.175",
      "private_ip": "172.31.46.222",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03d54509d9745e8e1",
      "instance_name": "AT_FT_Queue-Management-Module-v2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.214.211.159",
      "private_ip": "172.31.45.180",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b8ccd67fd4a07c00",
      "instance_name": "AT_SW__DL_API_Input",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.25.137.2",
      "private_ip": "172.31.41.39",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f4d92e53f92cfbf8",
      "instance_name": "Ai-Proxy-Log",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.244.93.173",
      "private_ip": "172.31.44.111",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07590cc051eb5a7bb",
      "instance_name": "FT_process_live",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.220.235.240",
      "private_ip": "172.31.47.44",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b958f13dd229a94a",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-049249d6cb1e0a2ed",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c440981412fd3cf1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-056ac27ed2f2300e9",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d8dee971f943cfc1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bd087922b1e453a6",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-038a4b904f2a97334",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa8094857a3835c8",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0df016680bda4b85c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e9364bb8e60920db",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09a6e003bfde00e14",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b9926343fc2558f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fb370fa8c1af3ad0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06604083f5a237b8e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0690549fc4036fd93",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06277aeba5048cb6b",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f7d900d0a572aef6",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0abbc4b335da7f190",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04e8ed900b5e957af",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dc6ae86b31421e66",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dbaee8686703abdf",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f69e53fe5abdb522",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0aeda9de45d3098fd",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09333be3de45dca1e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a87304a78be3a6bf",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e201d3873654339f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e4b36b73628a03f4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a1efb7876b161817",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0af8bf90080eabddb",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07d76ace38d88e932",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.249",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07e1a8ac310ff9d3a",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.152.8",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a537ba220e35ae67",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.68",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04e9526cacbd03e45",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.155.161",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0736deaeb09be2cc3",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.147.91",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0764e051b95b4e306",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.121",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f8dc1a7ce95b2357",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.248",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02653107f019fb373",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.111",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ae5da4ee87e06979",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.151.111",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00a2845e37f827ffe",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.144.193",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0272bae0adaf79926",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.126",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-059b2d55cda6e6be2",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.125",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e26f25cd5e76269a",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.185",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b33aa8f9ab74aca5",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.147.201",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cb1c21e9ea6089db",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.200",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c73411f91a8e255e",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.147.70",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d56161560ff064b4",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.2",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa8044546ad35c2c",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.155.16",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08373cd0ce0fae286",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.142",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-081da74484d3c884d",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.77",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0609d4bc7a79a17f6",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f8af55efe937a1da",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.149",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0124135633e43480a",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.149",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c0fa47fdb6a1ac4f",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.20",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08b9a6189d1c051da",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.80",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-014be8d1277bfb49e",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.218",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00e2c787d1b3bed1d",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.152",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ebb1ed05bf5dee13",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.231",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b957ce445838c991",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.100",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d1af36a695d31e2c",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.227",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06276dac7e3db8f9b",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.145.96",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02cccf4c2755876ec",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.174",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-055d35be47225b3df",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.107",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08538d91ea7499ae2",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.171",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09cb15f58442dda77",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ef0c00dbacc70375",
      "instance_name": "AT_FT__Faretrack_Offline_Delivery_02",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.232.221.240",
      "private_ip": "172.31.26.182",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a4284946c86875bd",
      "instance_name": "flightsapi-cluster-realtime-ng-Node",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.38.99.18",
      "private_ip": "172.31.30.18",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08dc5bc175b40bb7d",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.25.128.236",
      "private_ip": "172.31.28.46",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-089f0c3aaafae8098",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "18.246.235.97",
      "private_ip": "172.31.26.244",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02ebe87a0ae5c5397",
      "instance_name": "flightsapi-cluster-flightsapi-c5xl-prod-Node",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.202.6.64",
      "private_ip": "172.31.18.84",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0de5865e45e69f236",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0409ddc106b1c9731",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05dc4a981e5ce4f6e",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-050102884ae752616",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bb63cc04d49d95b6",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.167.228.232",
      "private_ip": "172.31.225.47",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08e0b0a5a78e4ec19",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.89.246.254",
      "private_ip": "172.31.250.16",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08ea7e2050dc02d53",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.91.222.118",
      "private_ip": "172.31.239.1",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0817c3f8e0a629a00",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.220.185.3",
      "private_ip": "172.31.236.2",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d27c8503983fbdc8",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.33.112.253",
      "private_ip": "172.31.245.132",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-025d5ad02c38c80a8",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.90.241.12",
      "private_ip": "172.31.236.23",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0770b689085856d7a",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.254.77",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f49378f8361720fb",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.245.78",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08f930940d7a206a0",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.243.77",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cfbf94e7f38393ea",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.247.205",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-062b0c6de7120396f",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.251.88",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05cd74b6841f4114b",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.224.18",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04d2709d9031d6f12",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.253.151",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-006c589229d918d6b",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.234.4",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ece2d595e68dc62d",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.243.133",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-004dbc22871b10a0e",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.233.191",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0824f3a372cc815d3",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.241.131",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0302b3f0ac2bdf01c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.236.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b89e4aa4a772a086",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.231.140",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02c861e11d55fa54b",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.236.199",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f2448448f988c8cd",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.254.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09b885ab0547a8545",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.241.51",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bef6a3cbc7d3a733",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.248.55",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e15190641da2de33",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.243.47",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b879a24054c876c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.238.178",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dd97c7fd067c36de",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.224.57",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0952f107618afd2b1",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.247.61",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0061bf7187b67f0a8",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.254.119",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0daaaa9e6f1ec22cb",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.228.56",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04fe827099f4dba82",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.239.97",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ff19c6d828b4dc49",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.247.163",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0265279c4ce776a24",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.254.97",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-057059b45f8b51cef",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.252.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0df3c37b4b8e5ab07",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.249.108",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-016142e5f7af5e48c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.238.168",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01a65f372f6ec6f58",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.249.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-009cbfa1d7f908724",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.42.48.133",
      "private_ip": "172.31.232.109",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-047878eaf13c1d5a2",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.94.122.254",
      "private_ip": "172.31.253.150",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ddbc6edd89596f56",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.93.27.131",
      "private_ip": "172.31.248.30",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06fc00a1e50dfce1f",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.242.15",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08153a132eefc487b",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.244.143",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0371259b379172402",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.232.75",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01a1d9a4e43bf93d0",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.238.255",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c88f9c56c575c425",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.226.15",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01d03331374cabf32",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.224.21",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04fff71cd88a9ebad",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.235.228",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03e704a09070fbbb9",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.242.56",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f84798ff0d5e874d",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.228.87",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-029ff7ee9e0cdae6e",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.247.100",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fcde7b1ff75300bc",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.89.208.118",
      "private_ip": "172.31.227.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09cf3d7fdafcd02a9",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.217.132.247",
      "private_ip": "172.31.231.218",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fdd9abbc7a4164a7",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.211.163.43",
      "private_ip": "172.31.232.87",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fda1e306260a5a8c",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.12.188.59",
      "private_ip": "172.31.229.174",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a3ef4dc3e4708fe1",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "18.237.116.255",
      "private_ip": "172.31.249.47",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00838db92cd95a87b",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.202.196.121",
      "private_ip": "172.31.245.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05d26c17bb73eee79",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.89.145.228",
      "private_ip": "172.31.239.217",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-078f612f60ef633cb",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.161.30.27",
      "private_ip": "172.31.249.171",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0376457da192f26bd",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.95.40.69",
      "private_ip": "172.31.226.220",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06222f4c769fcf365",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.190.248.191",
      "private_ip": "172.31.249.32",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e5590a4f94ec3be2",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.86.106.215",
      "private_ip": "172.31.227.147",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a9aedb1d4dbea2db",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.185.23.214",
      "private_ip": "172.31.224.232",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f3fb1b7046bc0513",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.89.76.116",
      "private_ip": "172.31.244.168",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01e25c9a383ba9a1c",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.211.85.91",
      "private_ip": "172.31.251.204",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03fa31d1520d2566b",
      "instance_name": "flightsapi-cluster-flightsapi-c5xl-prod-Node",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.160.180.96",
      "private_ip": "172.31.7.243",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01a09a690667c2b0d",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.15",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0db67a8ca7f671e06",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.145",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b703c2adb821b588",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.11",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0765db007813b0c3b",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.15",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08fcb36df1ecfaef2",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.26",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0eb40c9e7bdc3ec67",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.90",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bd79ddf6f41080bd",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.209",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a15e5c828d4c5ccc",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.211",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-094a413765ca20390",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.92",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa0e56ce4556ea7b",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.220",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c3719bf4f523214e",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.34",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b616d7727a382959",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.99",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-042ef0c619e6548c3",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.224",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-071cf02868ab3ed38",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.161",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0be25f5d9175f08eb",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.126.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a8aa999be73c6fe4",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.172",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bcaded9c45b8883a",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.102",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0578f53a52340ab4f",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.104",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0490bbbd448fd3712",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.175",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0443475b291aeed50",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.48",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cd45b7a63de2e4c4",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.236",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d7c4b0d30c164602",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.45",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05f850f04302158c5",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.127",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03128f6d1094b5f54",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.0",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03f4540c1b5bd6996",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.240",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05730f79664be0215",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.188",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-010997ddd51af2102",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.9",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a817673f03ecd46c",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.201",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-097b5936f02b7296f",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.198",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b5f11fd490fa917",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.70",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ae479a5750164296",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-065cd13709f22bfbf",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0837106a33cc562dc",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0af20a94ae410b465",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02ac6a46c969ab9d4",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0aa7adc224bf550ec",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0efc97cf6457f4c9e",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ee82e54ea0819205",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02644ef6a7e861d13",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c1f50264a2605fb8",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a5e265703b0f3f87",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-079c2a404009dc2a0",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07cbd4b77c1c3442d",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02f6d38cf9e4d1b56",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-047fcf5d5bb1145a0",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00c02ab26d2e59a65",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-010f33c7632762a5f",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03e345d0e9feeb515",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0be05a7ae8f790974",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0671621a4c33c00b4",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e7bec60b80132757",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0452d793ac32cdfc3",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e88fcd0fa2500001",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02d01b24f781650fe",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f258bcf1068f4860",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09219c487c413b35b",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ab2f35af9eca7861",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05a6d893da49c9ded",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06758d9f866f6f8b9",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09598ab24765327d3",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-086b3a07ef1673ebd",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d859c38c37b16aa4",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0709dbf1b26b5e30e",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f2c9956afc48153b",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03d61c0862a9fa0ed",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f40c279d7b7ddb4e",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00cc88d735ce59c66",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-028bc32c715da9b23",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06713f10e9e32f88e",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-039d35685c87c0a31",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d26dceed8d605d28",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0656a523d49b187ea",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bd2a7f4565aa4819",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b675bc0fc4e1f2e3",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a16d8414ff80d216",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ba0d04c894d73eb1",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0625fbe5800387000",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fdd07646a4da79f4",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00cd349a9a1f18fec",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02e7db8a762807397",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ffaf66ede08dd24c",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03c5fcfa3afb47e03",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0868d30d86bfb64d9",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05f0042a1578fad3a",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-045ff976cf986a2c3",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01756e0930807bd29",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f13cb630592a2cfb",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fa9eae5d0fdce41d",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09858a137f63a162b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06b8e79cc5fa78b19",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0353ae36ec83a58dd",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-023d14db5c562eb95",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ec428cd2dc553181",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c0a4f01926558ce6",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-097fe2882a913bd6b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0070f7e74202bcf33",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f316265abcfd2af1",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0cc20ae81c28256b7",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bd84f1e255e34c80",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fc3a507311809970",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a877a7823aac497b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05888283185748f75",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-064d600d1b190e7a0",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02a8960e7d7dca5cd",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0efdef3e01ed07176",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bf89d2396e773ca1",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f4f77b002c083c7f",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-017caade1ce415b65",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06aeb2b89639e8c7b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-070377292e75c23f7",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01c0d8a91cf8ca082",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f0ab8fce26eb88d1",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07078443c6636af02",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07d6c6451dd2eddf8",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f10b2e0cda5da45b",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a1d39ad41561155d",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f9fe346608adee6a",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c59e3494d252080c",
      "instance_name": "AT_FT_API_PSQL_windows",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05f09268fbf94267a",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03b040dffde123159",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-093b80e332a1a13c0",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-084c27d52d56af943",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.182",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0974088e28d7303cc",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.202",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a28500d388dbe3b1",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.9",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c88156bcb9c763a6",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.10",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fe8ec6537ec7a6c3",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.74",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b84527332326c117",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.203",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ee99f791604cf48d",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.75",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02f2491a680c1e5ff",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.18",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa233b65c32090b4",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.17",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-015b9b678c0a1f476",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.147",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05ab327e8254b9fca",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.210",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b605e8cc9c0a1773",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.153",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0df22e430b54c65a8",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.85",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ce313bd3501ff3f7",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.92",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00e77a9cd6862a067",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.26",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cf135ed9088b0f89",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.159",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0600ed342ce82e120",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.119.158",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0aad44e6d6a50b69e",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.34",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03cda4986bb5f94b1",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.121.96",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-025c5aa7e9a360e13",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.168",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00986a02042993761",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.101",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0105d4864489d166e",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05d5f908138ba3071",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d9ddb7971274c8d7",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.236",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c28d56d2dee79c63",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bf12536fff678b52",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.118.114",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-029c0e1d8ce7b335b",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.115.109",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08c72069d2a4cbf1c",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.116.178",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0392ed15efb66ff24",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.117.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0045f387ba803f5e2",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.181",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051e55c106e8e2e8a",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.114.244",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0590d22e286e01f42",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.126.123",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-061c9b95d375e37c4",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.127.249",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1c8b63d12051333",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.193",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04c583053b8af3bb6",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.254",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ac414563854e1c62",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.131",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04981b5ce2dde2709",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.113.194",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008b1bb11bc5d1582",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.112.5",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05220cfa8e68b8b42",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.120.133",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ca229131293a9c06",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.125.8",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dcb55df6b34b27f1",
      "instance_name": "AT_FT_API_PSQL_Linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.124.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0eb9737ff2f158c10",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-027359f26332c5e80",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0897c37d02b9c44da",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e83d64555a3d0952",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-063b073c9255cf6aa",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.129.64",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051f6a14446d3e303",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.131.161",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c12e61bc456c20e4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.133.68",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04fbc9c3acd1854e9",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.134.40",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0691ba6f15067198d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.132.72",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-061e87758a144c523",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.141.136",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008b90921b16a9256",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.135.137",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01356f17b045912ee",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.132.42",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-046efff2fef851077",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.141.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03f8c6fdbf20f5cc2",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.143.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-050b3f3deb35002eb",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.141.119",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d3d420761adcbfe3",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.136.120",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05946e7d8d710b756",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.143.121",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0077db07c083a0234",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.143.185",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-080e6a1e423bcdcf9",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.139.90",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0932a5d05d083c182",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.70.33",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0dd93877d0cdc774f",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.68.226",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-03d56b0f554689ac1",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.79.98",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0067c57c7ba6b048f",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.69.101",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0bb5fbd350da73539",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.65.230",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04534b37b8fa50b27",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.65.39",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02484cac216b87e1e",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.168",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-077491a7e74b14ac7",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.71.41",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f9cef79cdcc13632",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.233",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-053b00aef579c1e76",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.74.171",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-02c8b357e71d91317",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.76.107",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00c3e8304d94fb693",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.76.44",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b1350937b918a4a5",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.67.109",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01436abd13a873934",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.74.110",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f4151937ed3e7029",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.76.52",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01c2e9355db7a1e4a",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.65.118",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e121e63160c3332f",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.72.247",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07d6c2da5bfef38cb",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.68.120",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-012f6008f215910c2",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.65.249",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-045cfd9b81484e302",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.190",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-052a833330ba6efec",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.65.128",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06294c22a53b3ca85",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.70.192",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f87b4f1bbe3f4e4b",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.75.1",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-007dad1530a52470d",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.69.130",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-09a2618412e284a3e",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.64.131",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fb262791d480ef68",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.71.196",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b3cabf2e004aa6ea",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.74.133",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-08e47016b3bc28058",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.66.69",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0992dfa755ca52e81",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.135",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0aa306b15344cefb0",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.71.72",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0a809e7c88c247744",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.206",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-025b6de39dff20ad6",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.70.82",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f3f0ce0af9951c42",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.64.20",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0ed3ad5521e59e54c",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.66.22",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-001bb84ef78468bac",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.25",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e87dcbcbe0ecf586",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.73.26",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0dcc1a9e7e32004bb",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.77.219",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00540aea411101c01",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.70.219",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0152b8c01eaa0aad9",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.67.28",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0d22d1b9c397d0700",
      "instance_name": "AT_FT_Airasia_PSQL_IPV6_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.78.29",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0855aabdd78b2c914",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-05824d4e6a6cbd9b9",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0f4366c8586e4d10f",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c3f4ed7f2a462327",
      "instance_name": "AT_FT_faretrack_live_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-078acae70688b00c0",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.189.140.234",
      "private_ip": "172.31.18.103",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008711b590dbecade",
      "instance_name": "FT_Mongo_Shard2_v2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.245.117.113",
      "private_ip": "172.31.21.105",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fa5f3557e8f97884",
      "instance_name": "FT_Mongo_Shard1_v2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.34.164.59",
      "private_ip": "172.31.23.182",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-025551b6a42c76feb",
      "instance_name": "FT_Mongo_Mongos_v2",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.82.221.221",
      "private_ip": "172.31.18.179",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-079ef5234a324fd2f",
      "instance_name": "flightsapi-cluster-flightsapi-c5xl-prod-Node",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.33.212.59",
      "private_ip": "172.31.27.177",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-072074d8cfdb8e6cd",
      "instance_name": "Ai-Proxy-Distributor",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.94.15.203",
      "private_ip": "172.31.27.71",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01f99e8faf51c2b7c",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.68.194.203",
      "private_ip": "172.31.30.195",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d054fe4fef161e54",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.26.146.139",
      "private_ip": "172.31.16.145",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0174fe6a22a9d1cbe",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.94.149.129",
      "private_ip": "172.31.18.204",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-012ee236863d031a9",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.185.32.212",
      "private_ip": "172.31.28.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04099d44759837b5e",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.160.189.70",
      "private_ip": "172.31.30.148",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d896d3ba9bb68c0c",
      "instance_name": "NAT-AML2-Fleet",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.88.157.203",
      "private_ip": "172.31.31.13",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b5dd3ee6e630f3a8",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09b48cc42df4ed89d",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0283855e558b344cf",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f1a390cf68c93800",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0295c7268943262a8",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0619f25622f19d996",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cbceb6c2d4d0951a",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08740612a5a91073e",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0db8ce5655cc03b6f",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09b5eb3ce97708ef1",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d74085f4dc920554",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07b136e88641d8f7c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fbfe27c194b7a941",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b5fb19f8e65588a6",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-084055f687594b2ef",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-076573108baa9cb3b",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-050a249c2438b393c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c9de7dca49101e50",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a0df56dd33926732",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cea14b72768fc9b7",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06cb9918fc6b42204",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-033376144e327f18c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e4e003c930fd7aa2",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-059e444cc5b9611f8",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c342bf318774f02c",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-026f208c00b248769",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08192d4def5088d10",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-031706e92e972a745",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c1c5f5cdcae727c3",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-004bc33b01de12947",
      "instance_name": "AT_FT_ArajetP0_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-032f9a5b6bdbe3cc1",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.247.242",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0c8564fc90f171069",
      "instance_name": "AT_FT_faretrack_breeze_win",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.231.17",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0fbf42217cf02c1eb",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.220.181.71",
      "private_ip": "172.31.243.238",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f5c4274d234c735b",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.217.210.221",
      "private_ip": "172.31.243.208",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07570e2e3afdbf7ca",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.91.156.10",
      "private_ip": "172.31.245.145",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0362fa99b617ee87d",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.89.139.167",
      "private_ip": "172.31.226.210",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d6bc347399a65109",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.10.22.27",
      "private_ip": "172.31.241.19",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-062f5c3371bd8bdbf",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.213.245.206",
      "private_ip": "172.31.248.179",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03ca5ebdbd8212096",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.39.238.74",
      "private_ip": "172.31.245.84",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01d37c8f7af494f97",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.188.109.89",
      "private_ip": "172.31.249.20",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0467ff41aac43a2bd",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.202.101.188",
      "private_ip": "172.31.250.124",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0581426a9c527f277",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.200.111.161",
      "private_ip": "172.31.242.125",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06d6818b6d4b9d3ff",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "18.236.142.243",
      "private_ip": "172.31.243.222",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02eb5ed44c846bbcc",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.166.143.125",
      "private_ip": "172.31.242.159",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08c71080bc8769ca5",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.85.54.77",
      "private_ip": "172.31.237.33",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0708eab65dd917e17",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.213.232.213",
      "private_ip": "172.31.225.194",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c071c0fb57d86e7c",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.243.216.245",
      "private_ip": "172.31.240.163",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b60b1ceeb252e461",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.201.39.25",
      "private_ip": "172.31.249.99",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-001b5fec2c9ddca2e",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.87.38.141",
      "private_ip": "172.31.246.67",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09afea12a0e126a67",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "52.11.177.181",
      "private_ip": "172.31.225.197",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02a9a49cf73d3ccf4",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.85.54.153",
      "private_ip": "172.31.250.70",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08fc806f340e54105",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.217.108.175",
      "private_ip": "172.31.224.104",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-034f0b2ac07857c25",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "35.92.139.229",
      "private_ip": "172.31.230.179",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02a9f606afe974950",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.243.212.216",
      "private_ip": "172.31.247.84",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-062339e9a0d2a29ba",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "34.215.246.34",
      "private_ip": "172.31.248.238",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02ad7af5399d284bb",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "44.243.99.177",
      "private_ip": "172.31.237.118",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-058d4df2fc24acd58",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.149.57.99",
      "private_ip": "172.31.224.26",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03e26927f3f1c64d2",
      "instance_name": "AT_FT_faretrack_live_linux",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "54.188.13.47",
      "private_ip": "172.31.241.40",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01b0d1d21fa33ef07",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06d909ef81e864f81",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fe236c4c05a6ce08",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0afd1ff0739dc5d53",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ccc929c65dffb3b3",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f3fe26adca2ce454",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02b4ce0119554a27d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02dc09107246e1f5d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ba55387a524fee3c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0668b12415ccd07bf",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-047259eaceca87b26",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07cb72e0bfae7c824",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d0c9102062b39f09",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03163090cee05efe3",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01da41eff8de475f0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008dfeb6019449c64",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cedb67a9b9bd34b9",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a7c52472caf7de0c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b4554dcd0ceb5690",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e81ed69da5350d28",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04028af963f7d048b",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04592357d908c6bff",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-071e42041fc273a58",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dd356eba9c8b2bb1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-007b7b821dad716f4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04ec18d2ecaef86f8",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a47fea376de63c98",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05413de2bbed2a97f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cfa4f8f9b9f3ec2b",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-037713b84a93a3e69",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-059c6d49964edfdcb",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f64856f0adac9988",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f8808bb71932d7dd",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-076e54db6df74a8c4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cdde3f42066cdb67",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09df9ad14a9d4b8d6",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a13a11a3f768e943",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01912115c50ce401e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0af387482d3852aad",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a03f7248057b93b5",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ac8caa189e8985d0",
      "instance_name": "AT_SW_GGL_AA",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.208",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fbad514f19f9e799",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-085dde404dbe17e17",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00deeade103be1168",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ebbd276d683093e4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09cd6dd93ef34a424",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07999105f349d4050",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ac15c76aca21e099",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0b1ff8daa14921c1a",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-011bdbc30969a4733",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c4f6934793730f4f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.158",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03ddb4e3001a45701",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.29",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f3badba8434bedf6",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.93",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-054949a9ead34ba80",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.156",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0dd10fe9e30da10df",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.87",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e5073a9451e1f4d0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.150",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07dbfbfdbc638e243",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.151.84",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e813b27d005078b2",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.145.83",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e47bc395f8b6bbb1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.78",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06c61decbffc04fa0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.157.12",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09362751bcf40af2d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.139",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-009bc966d916224db",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.145.7",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0feba503841d28e3e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.132",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c3af1c9490528cab",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.2",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09262f7a7678e78dd",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.59",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0eabb0b2b74153346",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.58",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02387df79b02fa34d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.249",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-077f6a0bf9d3727c0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.118",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04d0e1a2968d24577",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.242",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0368ddfe73fc67d35",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.50",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02c8b3c9f4d5e2958",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0109cfe4649fcb2a7",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.170",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c9726b8928f44bef",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.145.41",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0200f3ded5dc03e68",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.166",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0411a73b724fd852e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.165",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03441ab47caf5e71f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.157",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c97a9feef44d668d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.149.156",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09ebb96edca644e19",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.221",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cd7996075a54ce87",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.217",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01e7f2451fbcc2b24",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.27",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02593f4d9f503d5a1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.23",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d353c941ed38a41d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.144.88",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07e9e973bf6f028dc",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.206",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02dde13d1be9f2c37",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.152.214",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6a1c332f3a3037e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.145.74",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06aa2ea2f84bbb3c3",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.151.142",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a1e4f782f5340877",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.7",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ec06b129e57ff499",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.74",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-091ff2a191d2f1e60",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.152.248",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d08bd1b93dbfe39d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.147.250",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ae354f8b0fff08ac",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.246",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a128016fc3727872",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.182",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01f82c410cf0dffff",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.144.174",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09dc5be98a1789454",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.178",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-01cec7f97e3af7c91",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.236",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09594121aa026cc3a",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.145.237",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0605bd34602f25afd",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.164",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e728511d1347bfeb",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.152.168",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f35bf09bc8fdbaf6",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.151.32",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f0e696b95cf6d7b5",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.32",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06bcd936c0cd4f4f5",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-008c7053db685209c",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05aee21f92063bf6f",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a680b7944ecdc91b",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-036c3912e6c660dc1",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07d7a56a245d1f1b2",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0168b448f3e11b3e1",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0462f4e3f54bf01df",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-006c9b8cd5821c566",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0a6425fb7cc93ea7c",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c87a0c1df04b1668",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fe9437ba174f18ac",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-088d42df107c29ade",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-027463511bb1c191b",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ec6ca63f76340067",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e4fa6fa927cbc2a8",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-038e6bf0a737dde5b",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bc98f15ef6d96411",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0689ee068347193c5",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02390dc940a5153d0",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09d0a9dbc02727187",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02ab5ccf1b2640740",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0e76963ef2a940787",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00e2efe0e3761a494",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d2e84324735dcdc8",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03a121b88f51cc203",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-096d5cdd061f37310",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06bd2178b239178c2",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03ac272c47fb35115",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00569fa1596539274",
      "instance_name": "AT_FT_Arajet_Linux_IPV6",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": null,
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00f35fb58357c36e0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.148.205",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0cf481cefb02576e4",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.152.28",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02fe5f5084e32e55c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.253",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05722b078fe99022d",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.93",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d497c11b0f3614e1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.35",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06b0d39e1b65667f0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.155.0",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0bdea979172d81d2c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.152",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05d12bb3f12e1e57e",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.212",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-071b1bf5ca60efee2",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.157.91",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09a74ebfaae8b8a0f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.218",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-00cf2dae441beb3e9",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.207",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-072188acdeef7cf92",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.153",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0de09c6bfdd99e393",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.73",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-077e52d2789de2b6c",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.151.53",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0145faa64bd8636f9",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.144.36",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-051e6b8f77cc56a19",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.153.173",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-095cb81caa4b3d9e8",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ed7f2363274ec5b1",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.158.126",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0621ef69cf56cf984",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.152.237",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0ee5980094735569f",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.156.194",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-083a779d69342fa65",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.146.225",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f7e5af2b5bf94c12",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.150.149",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06747d004be8fa1a7",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.159.4",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08021ec7aa6ef26c8",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.137",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07de1bcb293a801e0",
      "instance_name": "AT_FT_AIX_RT",
      "account": "Account 5646",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.154.37",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-041961a1fff5f96cf",
      "instance_name": "HS_HMR__HMR_MySQL_ubuntu",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "34.192.121.168",
      "private_ip": "172.31.75.202",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06b68d441d33857f6",
      "instance_name": "OH__admin",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "52.207.98.246",
      "private_ip": "172.31.53.196",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-06c48b5f204c93fe3",
      "instance_name": "HS_HMR__HMR_windows",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "3.229.14.189",
      "private_ip": "172.31.32.232",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07dc5e373c3f8787e",
      "instance_name": "HS_RAPI__RM_Web_new",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "54.198.211.7",
      "private_ip": "172.31.36.223",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-07884cc7755aba5c9",
      "instance_name": "HS_RAPI__RMHosting_SQLWEBNew",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "35.174.194.99",
      "private_ip": "172.31.32.173",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0e801a3a25dc7b151",
      "instance_name": "HS_RM__Picasso",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "34.201.184.238",
      "private_ip": "172.31.67.82",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0386b6e508806d8f5",
      "instance_name": "HS_RM__Picasso_DataLake_server",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "54.145.21.106",
      "private_ip": "172.31.33.153",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0362e68a93d8b470b",
      "instance_name": "HS_RM__Picasso_mongoDB_new",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "52.200.87.76",
      "private_ip": "172.31.35.194",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04581571116ddfcaa",
      "instance_name": "HS_RM__Picasso schedule",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.42.120",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-037f596d4e161cf1c",
      "instance_name": "HS_RM__Picasso_DA_API",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "54.152.62.225",
      "private_ip": "172.31.91.56",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-03b4e6f5a3b0a9cfa",
      "instance_name": "HS_RM__Picasso_rm_datafetch",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.70.151",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0c23e5baa9f3b2be3",
      "instance_name": "HS_RM__Picasso_DataLake_server_new",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "3.90.73.15",
      "private_ip": "172.31.47.179",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-02b057e31c75b3aa5",
      "instance_name": "HS_RM__picasso_app_staging",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "54.85.83.109",
      "private_ip": "172.31.71.234",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07eae767588074d84",
      "instance_name": "HS_RM_ratemetrics_psql",
      "account": "Account 365",
      "region": "us-east-1",
      "public_ip": "44.193.170.132",
      "private_ip": "172.31.79.106",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d7dae14a1e565943",
      "instance_name": "RE_ST__DA_st_api",
      "account": "Account 365",
      "region": "us-west-1",
      "public_ip": "52.53.66.67",
      "private_ip": "172.31.12.161",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-053b0237f39f683e9",
      "instance_name": "RE_ST__AIStortrackSQL",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "52.25.185.187",
      "private_ip": "172.31.11.52",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-01ac3cecdef77223f",
      "instance_name": "RE_ST__ST_SQLSTD",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "35.167.107.202",
      "private_ip": "172.31.11.90",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0abd4516c03c05d13",
      "instance_name": "RE_ST__ST_141_alternate",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.187.251.121",
      "private_ip": "172.31.10.48",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-040e5bfe8f32bd9e6",
      "instance_name": "RE_RV__RVParks_webserver",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.242.105.239",
      "private_ip": "172.31.13.171",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-050e33d77bd63528b",
      "instance_name": "RE_RV__RVParks_webSQL",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "35.161.224.79",
      "private_ip": "172.31.11.99",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0979556aca7652753",
      "instance_name": "RE_ST__ST_StagingSQLweb",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "100.20.20.224",
      "private_ip": "172.31.12.244",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-00ee5f9bcd018a6de",
      "instance_name": "RE_ST__ST_mongo_db",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "35.160.218.252",
      "private_ip": "172.31.48.119",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-022013bd7d4d3950a",
      "instance_name": "RE_ST__ST_App_server_new",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.226.238.154",
      "private_ip": "172.31.5.244",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-04bc5f83d7eb5adb9",
      "instance_name": "RE_ST__Storage_Unite_Attribute_QC",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "34.214.10.223",
      "private_ip": "172.31.25.92",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0d8da2ed071478e3f",
      "instance_name": "OH__Machine-Test",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "NO ip assigned",
      "private_ip": "172.31.42.229",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-084f37a6288d5a5d5",
      "instance_name": "RE_ST_STExplorer_stg",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.185.148.9",
      "private_ip": "172.31.27.53",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-018aecc22c8045a86",
      "instance_name": "RE_RV_RVParksExplorer_Stg",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.245.31.22",
      "private_ip": "172.31.27.107",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-05df72d1a86da4ced",
      "instance_name": "FTP_ST",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "52.36.78.164",
      "private_ip": "172.31.23.254",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-08deda9b223a20ab7",
      "instance_name": "RE_ST_NassExplorer_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "35.94.242.128",
      "private_ip": "172.31.49.17",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-04763cf8e2ba5c71c",
      "instance_name": "RE_ST_Optimize_App_Server",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.231.52.74",
      "private_ip": "172.31.56.122",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fd6baa598c69f342",
      "instance_name": "FE_DV__Staging_Web_78_new",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.149.157.8",
      "private_ip": "172.31.3.147",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b4cffb8d9a0ac810",
      "instance_name": "RE_ST_Explorer_PSQL_Staging",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "52.42.52.3",
      "private_ip": "172.31.10.3",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f736835e695cafcc",
      "instance_name": "RE_ST_Dashboard_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "18.236.190.154",
      "private_ip": "172.31.44.188",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07fb018fc492f9b95",
      "instance_name": "RE_ST_EuropeExplorer_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.243.222.149",
      "private_ip": "172.31.46.112",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06803bcd0646b59eb",
      "instance_name": "RE_ST_EuropeExplorer_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.149.97.252",
      "private_ip": "172.31.23.204",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09a36a330f7a8500a",
      "instance_name": "SFTP_ST",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.244.184.198",
      "private_ip": "172.31.31.49",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    }
  ]
  




  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/home" 
          element={<ProtectedRoute element={<Home />} />} 
        />
        <Route 
          path="/instancelist" 
          element={<ProtectedRoute element={<Table data={instances}/>} />} 
        />
        <Route 
          path="/Dolaunch" 
          element={<ProtectedRoute element={<Dolaunch />} />} 
        />
        <Route 
          path="/AWSlaunch" 
          element={<ProtectedRoute element={<AWSlaunch />} />} 
        />
        <Route 
          path="/about" 
          element={<ProtectedRoute element={<About />} />} 
        />
        <Route 
          path="/register" 
          element={<ProtectedRoute element={<Login handleSubmit={handleRegister} username={username} password={password} setUsername={setUsername} setPassword={setPassword} ch={false} />} />} 
        />
        <Route 
          path="/login" 
          element={<Login handleSubmit={handleLogin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} ch={true} />} 
        />
        {/* <Route 
          path="/register" 
          element={<Login handleSubmit={handleRegister} username={username} password={password} setUsername={setUsername} setPassword={setPassword} ch={false} />} 
        /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
