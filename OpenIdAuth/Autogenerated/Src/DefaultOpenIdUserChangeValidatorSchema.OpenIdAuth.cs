namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: DefaultOpenIdUserChangeValidatorSchema

	/// <exclude/>
	public class DefaultOpenIdUserChangeValidatorSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultOpenIdUserChangeValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultOpenIdUserChangeValidatorSchema(DefaultOpenIdUserChangeValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0");
			Name = "DefaultOpenIdUserChangeValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,219,106,227,48,16,125,78,161,255,48,245,190,216,16,252,1,237,118,33,113,154,226,135,180,129,180,251,82,202,162,88,99,91,96,75,70,151,130,9,249,247,234,226,166,241,146,208,188,24,52,163,115,153,51,50,112,210,162,234,72,129,48,95,175,54,162,212,105,38,120,201,42,35,137,102,130,167,207,29,242,156,206,140,174,175,175,118,215,87,19,163,24,175,96,211,43,141,237,221,225,252,141,149,120,186,154,62,112,205,52,67,117,166,189,36,133,22,50,244,237,141,95,18,43,43,15,89,67,148,186,133,5,150,196,52,58,152,121,85,40,179,154,240,10,255,146,134,81,98,113,30,243,54,220,154,51,78,45,127,172,251,14,69,25,231,103,81,73,242,110,97,157,217,54,172,128,194,41,253,40,4,183,112,158,207,146,237,188,147,131,253,21,234,90,80,59,192,218,139,132,230,32,184,21,162,129,140,240,64,226,232,98,207,41,56,199,194,101,15,102,116,156,130,143,176,7,213,171,25,109,25,127,229,76,175,4,101,37,67,154,128,91,206,100,242,104,24,245,184,156,194,253,201,155,233,35,234,23,155,12,205,68,99,90,110,205,27,252,237,96,127,226,40,167,81,114,231,121,62,136,4,85,212,216,18,75,51,246,17,54,217,111,124,119,69,56,169,80,58,210,156,43,77,120,129,243,254,201,190,169,56,218,28,137,143,104,143,234,206,163,231,73,51,137,68,99,160,142,199,130,3,86,105,105,183,250,246,14,255,10,239,92,189,136,37,234,162,182,28,59,136,252,82,22,27,179,141,166,16,205,44,238,3,35,216,7,36,43,33,190,57,150,77,61,112,41,69,187,152,199,163,70,152,42,93,75,214,18,217,135,136,82,55,207,116,72,117,250,191,124,242,21,253,68,162,54,146,131,150,6,131,238,254,160,30,188,167,185,122,50,77,243,44,31,218,206,78,57,18,62,181,149,128,178,123,249,30,46,185,76,238,210,189,187,55,104,249,135,188,18,184,31,191,153,75,48,63,249,25,202,37,105,84,168,239,135,95,4,57,13,127,137,63,135,234,184,184,7,247,253,4,110,42,26,3,163,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0"));
		}

		#endregion

	}

	#endregion

}

