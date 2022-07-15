import React, { useEffect, useState} from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import urbis2 from '../../assets/urbis2.png'
import { useAuth } from '../../context/auth';
import api from '../../services/api';

const BenefitsUsuario = () => {

    const BenefitsDataType = {
        id: string;
        title: string;
        description: string;
        isPermanent: boolean;
        isVoucher: boolean;
        isOnline: boolean;
        status: boolean;
        discount: string;
        image: string;
        url: string;
        establishmentId: string;
      };

      const IBenefits = {
        statusCode: number";
        message: string;
        data: {
          totalCount: number;
          page: number;
          limit: number;
          data: Array<BenefitsDataType>;
        };
      }
      
      const Benefits = () => {
        const {
          data: { user, token },
        } = useAuth();
        const [benefits, setBenefits] = useState<Array<BenefitsDataType>>([]);
      
        const loadBenefits = async () => {
          const response = await api.post<IBenefits>(
            `incentive/search?page=${1}&qtd=${10}&paginable=${true}`,
          );
          api.defaults.headers.common.Authorization = `Bearer ${token}}`;
      
          setBenefits([...response.data.data.data]);
        };
      
        useEffect(() => {
          loadBenefits();
        }, []);
      

      
    return(
        <div>
        </div>
    )
}

export default BenefitsUsuario