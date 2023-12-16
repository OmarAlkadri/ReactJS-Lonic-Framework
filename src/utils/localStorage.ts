/* eslint-disable @typescript-eslint/no-explicit-any */
export const saveCampaign = (campaign: any) => {
    const campaigns = getCampaigns();
    localStorage.setItem('campaigns', JSON.stringify([...campaigns, campaign]));
};

export const getCampaigns = () => {
    const test: any = localStorage.getItem('campaigns');
    const result = JSON.parse(test) || [];
    console.log(result);
    return result;
};